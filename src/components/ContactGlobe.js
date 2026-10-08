const CONTINENTS = [
  [[-168, 67], [-145, 70], [-124, 50], [-113, 32], [-98, 18], [-82, 25], [-66, 45], [-54, 54], [-72, 72], [-105, 78], [-140, 72], [-168, 67]],
  [[-82, 12], [-73, 4], [-70, -16], [-60, -36], [-48, -55], [-37, -25], [-50, 2], [-67, 10], [-82, 12]],
  [[-11, 36], [3, 51], [29, 70], [62, 72], [103, 60], [143, 52], [160, 38], [127, 8], [104, 1], [80, 8], [57, 25], [36, 31], [24, 40], [8, 43], [-11, 36]],
  [[-17, 34], [9, 37], [33, 30], [51, 12], [43, -15], [28, -35], [13, -35], [-1, -22], [-13, 5], [-17, 34]],
  [[112, -11], [132, -12], [153, -27], [146, -42], [118, -35], [112, -11]],
  [[47, -13], [51, -18], [49, -26], [44, -24], [43, -16], [47, -13]],
  [[-53, 60], [-39, 68], [-22, 76], [-43, 83], [-62, 77], [-53, 60]],
];

export function renderContactGlobe() {
  return `
    <div class="contact-globe" aria-label="Interactive rotating global operations network">
      <canvas class="contact-globe-canvas" data-contact-globe role="img" aria-label="Rotating wireframe globe centered on India"></canvas>
      <div class="contact-globe-fade" aria-hidden="true"></div>
    </div>
  `;
}

function projectPoint(lon, lat, rotation, radius, center) {
  const lambda = (lon + rotation.lon) * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const tilt = rotation.lat * Math.PI / 180;
  const x = Math.cos(phi) * Math.sin(lambda);
  const baseY = Math.sin(phi);
  const baseZ = Math.cos(phi) * Math.cos(lambda);
  const y = baseY * Math.cos(tilt) - baseZ * Math.sin(tilt);
  const z = baseY * Math.sin(tilt) + baseZ * Math.cos(tilt);
  return { x: center.x + x * radius, y: center.y - y * radius, visible: z > 0 };
}

function traceGeoLine(ctx, points, rotation, radius, center) {
  let drawing = false;
  points.forEach(([lon, lat]) => {
    const point = projectPoint(lon, lat, rotation, radius, center);
    if (!point.visible) {
      drawing = false;
      return;
    }
    if (!drawing) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
    drawing = true;
  });
}

function sampledLongitude(lon) {
  return Array.from({ length: 73 }, (_, index) => [lon, -90 + index * 2.5]);
}

function sampledLatitude(lat) {
  return Array.from({ length: 145 }, (_, index) => [-180 + index * 2.5, lat]);
}

function initializeContactGlobe(canvas) {
  if (canvas.dataset.ready === 'true') return;
  canvas.dataset.ready = 'true';

  const ctx = canvas.getContext('2d');
  const rotation = { lon: -78, lat: -12 };
  let dragging = false;
  let previous = null;
  let frame = null;
  let visible = true;
  let lastTime = performance.now();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const draw = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    const radius = Math.min(width * 0.43, height * 0.66);
    const center = { x: width / 2, y: height * 0.58 };

    ctx.save();
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.clip();

    ctx.strokeStyle = 'rgba(21, 38, 52, 0.16)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    [-60, -30, 0, 30, 60].forEach((lon) => traceGeoLine(ctx, sampledLongitude(lon), rotation, radius, center));
    [-60, -30, 0, 30, 60].forEach((lat) => traceGeoLine(ctx, sampledLatitude(lat), rotation, radius, center));
    ctx.stroke();

    ctx.strokeStyle = 'rgba(16, 30, 42, 0.72)';
    ctx.lineWidth = 1.05;
    ctx.beginPath();
    CONTINENTS.forEach((continent) => traceGeoLine(ctx, continent, rotation, radius, center));
    ctx.stroke();
    ctx.restore();

    ctx.strokeStyle = 'rgba(16, 30, 42, 0.58)';
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.stroke();
  };

  const animate = (time) => {
    if (!canvas.isConnected) {
      observer.disconnect();
      return;
    }
    const delta = Math.min(32, time - lastTime);
    lastTime = time;
    if (visible && !dragging && !reducedMotion) rotation.lon = (rotation.lon + delta * 0.0045) % 360;
    draw();
    frame = requestAnimationFrame(animate);
  };

  canvas.addEventListener('pointerdown', (event) => {
    dragging = true;
    previous = { x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!dragging || !previous) return;
    rotation.lon += (event.clientX - previous.x) * 0.35;
    rotation.lat = Math.max(-50, Math.min(50, rotation.lat - (event.clientY - previous.y) * 0.25));
    previous = { x: event.clientX, y: event.clientY };
  });
  canvas.addEventListener('pointerup', () => {
    dragging = false;
    previous = null;
  });
  canvas.addEventListener('pointercancel', () => {
    dragging = false;
    previous = null;
  });

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  }, { threshold: 0.05 });
  observer.observe(canvas);
  frame = requestAnimationFrame(animate);

  window.addEventListener('pagehide', () => {
    observer.disconnect();
    if (frame) cancelAnimationFrame(frame);
  }, { once: true });
}

export function attachContactGlobe() {
  document.querySelectorAll('[data-contact-globe]').forEach(initializeContactGlobe);
}
