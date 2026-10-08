import worldAtlas from 'world-atlas/countries-110m.json';
import { mesh } from 'topojson-client';

const CONTINENTS = [
  [[-168, 67], [-145, 70], [-124, 50], [-113, 32], [-98, 18], [-82, 25], [-66, 45], [-54, 54], [-72, 72], [-105, 78], [-140, 72], [-168, 67]],
  [[-82, 12], [-73, 4], [-70, -16], [-60, -36], [-48, -55], [-37, -25], [-50, 2], [-67, 10], [-82, 12]],
  [[-11, 36], [3, 51], [29, 70], [62, 72], [103, 60], [143, 52], [160, 38], [127, 8], [104, 1], [80, 8], [57, 25], [36, 31], [24, 40], [8, 43], [-11, 36]],
  [[-17, 34], [9, 37], [33, 30], [51, 12], [43, -15], [28, -35], [13, -35], [-1, -22], [-13, 5], [-17, 34]],
  [[112, -11], [132, -12], [153, -27], [146, -42], [118, -35], [112, -11]],
  [[47, -13], [51, -18], [49, -26], [44, -24], [43, -16], [47, -13]],
  [[-53, 60], [-39, 68], [-22, 76], [-43, 83], [-62, 77], [-53, 60]],
];

const WORLD_BORDER_LINES = mesh(worldAtlas, worldAtlas.objects.countries).coordinates;

const INDIA_PORTS = [
  [72.1, 23.0],
  [69.7, 21.7],
  [72.8, 18.9],
  [73.8, 15.4],
  [74.8, 12.9],
  [76.3, 9.9],
  [78.2, 8.8],
  [79.8, 11.0],
  [80.3, 13.1],
  [82.3, 16.8],
  [83.2, 17.7],
  [86.7, 20.3],
  [88.3, 22.0],
  [91.8, 22.3],
  [80.7, 7.0],
  [92.7, 11.7],
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

function drawStar(ctx, x, y, outerRadius = 9, innerRadius = 4) {
  ctx.beginPath();
  for (let index = 0; index < 10; index += 1) {
    const angle = -Math.PI / 2 + index * Math.PI / 5;
    const radius = index % 2 === 0 ? outerRadius : innerRadius;
    const pointX = x + Math.cos(angle) * radius;
    const pointY = y + Math.sin(angle) * radius;
    if (index === 0) ctx.moveTo(pointX, pointY);
    else ctx.lineTo(pointX, pointY);
  }
  ctx.closePath();
  ctx.fill();
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
  const highlightsVisakhapatnam = canvas.classList.contains('coverage-globe-canvas');
  const baseAriaLabel = canvas.getAttribute('aria-label') || 'Interactive globe';
  const rotation = { lon: -78, lat: -12 };
  let dragging = false;
  let hovering = false;
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
    ctx.lineWidth = highlightsVisakhapatnam ? 0.72 : 1.05;
    ctx.beginPath();
    const borderLines = highlightsVisakhapatnam ? WORLD_BORDER_LINES : CONTINENTS;
    borderLines.forEach((border) => traceGeoLine(ctx, border, rotation, radius, center));
    ctx.stroke();
    ctx.restore();

    ctx.strokeStyle = 'rgba(16, 30, 42, 0.58)';
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.stroke();

    if (highlightsVisakhapatnam) {
      ctx.fillStyle = '#f52222';
      INDIA_PORTS.forEach(([lon, lat]) => {
        const port = projectPoint(lon, lat, rotation, radius, center);
        if (!port.visible) return;
        ctx.beginPath();
        ctx.arc(port.x, port.y, 3.2, 0, Math.PI * 2);
        ctx.fill();
      });

      const location = projectPoint(83.2185, 17.6868, rotation, radius, center);
      if (location.visible) {
        ctx.fillStyle = '#ffe500';
        drawStar(ctx, location.x, location.y, 10, 4.5);

        if (hovering) {
          const label = 'Visakhapatnam';
          ctx.font = '600 13px Inter, sans-serif';
          const labelWidth = ctx.measureText(label).width + 22;
          const labelX = Math.min(width - labelWidth - 8, location.x + 14);
          const labelY = Math.max(8, location.y - 17);

          ctx.fillStyle = 'rgba(12, 27, 39, 0.92)';
          ctx.beginPath();
          ctx.roundRect(labelX, labelY, labelWidth, 34, 6);
          ctx.fill();
          ctx.fillStyle = '#fff';
          ctx.textBaseline = 'middle';
          ctx.fillText(label, labelX + 11, labelY + 17);
        }
      }
    }
  };

  const animate = (time) => {
    if (!canvas.isConnected) {
      observer.disconnect();
      return;
    }
    const delta = Math.min(32, time - lastTime);
    lastTime = time;
    if (visible && !dragging && !hovering && !reducedMotion) rotation.lon = (rotation.lon + delta * 0.0045) % 360;
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
  if (highlightsVisakhapatnam) {
    canvas.addEventListener('pointerenter', () => {
      hovering = true;
      rotation.lon = -78;
      rotation.lat = -12;
      canvas.dataset.locationVisible = 'true';
      canvas.setAttribute('aria-label', `${baseAriaLabel} - Visakhapatnam highlighted`);
    });
    canvas.addEventListener('pointerleave', () => {
      hovering = false;
      canvas.dataset.locationVisible = 'false';
      canvas.setAttribute('aria-label', baseAriaLabel);
    });
  }

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
