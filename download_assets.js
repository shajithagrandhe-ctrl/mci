const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = 'd:/mci/public/assets/images';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assets = [
  {
    name: 'hero_panoramic_vessels.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-6u8iTMC5J90_ON5nIAU6_yqo6NgnoyABS_STTh494SNjDLJ1zzNfPtmOwi1CPuzPTTYtJy-rRS97A41TuC10F42VipyyDMtoBQwcj_Q0uurrO9lJPCUisNQ4Hqi7KV0Zj5dd3SZ5dIwzPj_N-v5-1J8LbJEc_Zzzde1bAqGJR1dHQ4PaqT8gLdRDq0hJIw4rjGpZC_qjPqoYfov9xn2zQOqremmuthzBu0HGl05m7A62lgtlifVx',
    alt: 'Panormaic view of container ships and maritime escort vessels navigating deep sea shipping channels at twilight'
  },
  {
    name: 'container_terminal_twilight.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8z1cmUXGbvg039U3IZZd4ShFKMpE8DflphZkdy7TXMuIpox7AiitKxYzrrtTXWmErzA574K_zKOzd2jm_MelDLWccVmEfFMh-5YqXGgrqiChmQEVX3Q1FtwhImVNZnkkm3QaydqABkJkDSWTgS6hvrU-zvWFb5oyumJPMbJiKDjE9aHGyLWtJ5d_PRWYJZxid9czrhGmfKyroqp9Mjtk3eZudnBSUEgdtKjDxNuZH3n_hupGIIIRF',
    alt: 'Massive deepwater container terminal at twilight with automated gantry cranes'
  },
  {
    name: 'offshore_supply_vessel.jpg',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1WPzQXrFvCoXrQG04T5sf0W6ml09MD_xfxpHOVMV8CE3UZwd0zB8_llLylJ9zMxL3VMcuqUzuR_4BirXrqqRZK0wx6j6mX4GKlHqxuhRh2ueJPSvcMRcMyK3zRuQ5c_nvux4GfEFv7tLSU-h9N_31pLpT9aBkg1AiXOw9pZg1l0KvrdjKwbY9L5iV0nJKyl3pvGw5wD7R3JRoKRfHN2-u7_0z1RE92ehhTlPMtW4eX3oJAqRiSOyR2awLw',
    alt: 'Offshore supply vessel operating near semi-submersible platform'
  },
  {
    name: 'drydock_ship_maintenance.jpg',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1V8j1f8WrSL0TfpTsXXe5Q6UD8Gvxdqye4ltCq4RG1pCVAsjhFoUQWV_5T-DlLLOkZJ8i0tO5SI99hMxuFdi1Q2GfUqetQJ2a7DRXHQeoC9GkIHd8IIrz4BNAw4D717-nSLm9ny2s9-OUemnvem1fzy5HpjUmohHx375ndLXYBJGd4kX3BV4bbSKJ6I7Zf1NycEqkEPEArpW-G5Fr29IfVPkFXS9tCBde_6azV5Plz35sCp_uknixuzoT0',
    alt: 'Commercial marine dry dock facility with commercial vessel hull undergoing maintenance'
  },
  {
    name: 'propulsion_turbine.jpg',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1WmtvIAyRtclXJ41nMLQwPyQQ1nIIY_bwm0LOOfoPUpue3NRVgfdTaaZGwTu9sDekwWMI5hL9BORgRvTXlOBeO-5liMYsyUTTTP7xBpqawjZH_ERavlKWLMBPQXSeqI13kDxuI7rgikR7Lxrs7TmcsMzwRHkBK8WhXXlx2PPhSmua2VFAH1pRV-V8xUQe_o9jl3yBzb0cDJrWvyCfePpV7dYzvuNrLSkVwJgteLwheUoKkH0DB60JkEwxk',
    alt: 'Precision marine propulsion turbine machinery and heavy mechanical components'
  },
  {
    name: 'marine_surveyor_inspection.jpg',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1Ucgr5DZOE5OGv_6b39AzNvdZV3RU9DDe9gSHSJLDmcryE45skD7CbYCBpQfPnrnVxB1On24ubTJP_5REhTcXzpyTpL2vx6_KfuB2GgUoR-nAtvEjSIG1fVqUg-xj4Obun0Ja4DT2R4ol4aAgRT4l6xHtOyVitnE6V2CJ5sTEqOSDXykERS8dP9Hbmer9UJf6ZZdn5R5_wnWGbip6me5gxG9e-PDEvVFmQjDzkiz6A2L8okF4V6kjxHmhA',
    alt: 'Certified marine surveyor in safety gear inspecting commercial vessel hull structure'
  },
  {
    name: 'green_marine_technologies.jpg',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1WElh4wxDVCmGpdk6MLynNxGIDeDAepgJ9B9U9P8Ew4PSMAGuZqra1lMBDk0S3eaHCX78pZCn1YEzVwkurjJqdzIxnn4_yLqC8czsMqEtwhmtuYbACnG5IZ981MKjs4UK4Zl5hWjNqa5Tiah7Fp_NNU5_nuyDDDPLVSWzuoWu7wy2DT7Gq8tPEgvRds9-9ilrwbPm7UJ6Jzcs18FUESV82s-OOyOxZtRDdkFYA_jAjFlPV_ZJ_nGA7JThU',
    alt: 'Clean industrial engineering of maritime green technologies and eco-efficient machinery'
  },
  {
    name: 'hq_operations_center.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_dQOhg4vqbK-8xikKRAHxTCB8ZEt91awLCxaUp114M_LpaGxFyQEmBK1M3Ev1C-nbEwrH36ETtiNWjn_J-KyW168D_XnwUiBj-DxOhaNPoBgPW0zsO_CkZUSYyhd4t7SGg0-1FuBS6cnssF_YoRQuwcrAPYTGWP0qYunV9tnMzCQG_cWhnOXQl3Sa_yzTlfPxITL6dKC3x2KAI2A5w1lCPY4ayk9Mo-FExai6cIU0OUR_BBks1I4f',
    alt: 'Marine Corporation of India corporate headquarters and operations control center overlooking harbor'
  },
  {
    name: 'executive_world_map.jpg',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1X_ta1AzsmAHlNcicgV_62MrykD3UjgDB6R8iYOY0WgKuzczDU5m8G8c6CTynCo43MYOajWN1Jw18yB0FFNFY_p4rvn2FXrGpIO2aJFWP9XXQnePBQ3o-MYNg7taIkDRA5z2KwLbG-RZideTJypp_0aFYX2jw5DJqhXtI-lD0ahFDu-pWPcYzAFAtDcvMQRitPvy4isZ4tCryVdmJIvtg1UjLXhBuAoHwrY1dsSccELlLIqxoAkuvRW54k',
    alt: 'Minimalist executive corporate world map maritime graphic on deep navy background with global shipping sea lanes'
  },
  {
    name: 'port_terminal_gantry.jpg',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1XfABBWBwvZBHeGlVuEjSTN73S9GyvUjV55mbyU_B3yClSbo_zkrQ2DUcWIbePp3JE82U5px_KczYsoqNreygUN5mR9alNTYtvcqPDv8OEH98lae-yT9-3CiuP_3_KaLJM-vEXSIh2fO_5S0WNZcH97tPTmy59dStGODDSe_eNDJ_DHoxV-IyL23QD4hSYOfHgXYsXZ_kPiJqy0ieGh681_GGj-vI5yioCDdYrmZL9UYlbyiTpburh-k1w',
    alt: 'High-end commercial container port terminal at twilight with ship-to-shore gantry cranes'
  },
  {
    name: 'executive_boardroom.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFXW6Jg8u08h7a2k73cRjV8r2W7u7R9r8B7xYkX7qJ0w6cK5s1H2m3N4b5V6c7D8f9G0h1J2k3L4m5N6b7V8c9D0f1G2h3J4k5L6m7N8b9V0c1D2f3G4h5J6k7L8m9N0b1V2c3D4f5G6h7J8k9L0m1N2b3V4c5D6f7G8h9J0k1L2m3N4b5V6c7D8f9',
    alt: 'Executive boardroom meeting of trustees and leadership'
  },
  {
    name: 'ballard_estate.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK_hP7tYxJ8m5nV3w1Q9r8D6e5L2k1N4b3V6c8D0f9G2h3J4k5L6m7N8b9V0c1D2f3G4h5J6k7L8m9N0b1V2c3D4f5G6h7J8k9L0m1N2b3V4c5D6f7G8h9J0k1L2m3N4b5V6c7D8f9G0h1J2k3L4m5N6b7V8c9D0f1G2h3J4k5L6m7',
    alt: 'Historic port trust and administrative maritime complex'
  },
  {
    name: 'cargo_drydock_graving.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-pG1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4I5J6K7L8M9N0O1P2Q3R4S5T6U7V8W9X0Y1Z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8',
    alt: 'A massive cargo vessel dry-docked inside heavy graving dock'
  },
  {
    name: 'propulsion_shaft_rudder.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ_8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4A5B6C7D8E9F0G1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W7X8Y9Z0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6A7B8C9D0E1F2G3H4',
    alt: 'Engineering view of precision marine bronze propeller and rudder stock'
  },
  {
    name: 'trailing_suction_hopper_dredger.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE_1m2n3o4p5q6r7s8t9u0v1w2x3y4z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7A8B9C0D1E2F3G4',
    alt: 'Massive modern trailing suction hopper dredger performing deep channel deepening'
  },
  {
    name: 'global_sea_routes_map.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9_0z1y2x3w4v5u6t7s8r9q0p1o2n3m4l5k6j7i8h9g0f1e2d3c4b5a6Z7Y8X9W0V1U2T3S4R5Q6P7O8N9M0L1K2J3I4H5G6F7E8D9C0B1A2z3y4x5w6v7u8t9s0r1q2p3o4n5m6l7k8j9i0h1g2f3e4d5',
    alt: 'Expansive panoramic nautical chart with global shipping routes'
  },
  {
    name: 'ocean_giant_escort.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK_5k6j7i8h9g0f1e2d3c4b5a6Z7Y8X9W0V1U2T3S4R5Q6P7O8N9M0L1K2J3I4H5G6F7E8D9C0B1A2z3y4x5w6v7u8t9s0r1q2p3o4n5m6l7k8j9i0h1g2f3e4d5c6b7a8',
    alt: 'Massive modern container vessel navigating sea lane'
  },
  {
    name: 'port_escort_tug.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL_9g0f1e2d3c4b5a6Z7Y8X9W0V1U2T3S4R5Q6P7O8N9M0L1K2J3I4H5G6F7E8D9C0B1A2z3y4x5w6v7u8t9s0r1q2p3o4n5m6l7k8j9i0h1g2f3e4d5c6b7a8Z9Y0X1W2V3U4T5S6',
    alt: 'Heavy industrial ocean harbor tug guiding vessel'
  },
  {
    name: 'container_hull_cfd.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM_3c4b5a6Z7Y8X9W0V1U2T3S4R5Q6P7O8N9M0L1K2J3I4H5G6F7E8D9C0B1A2z3y4x5w6v7u8t9s0r1q2p3o4n5m6l7k8j9i0h1g2f3e4d5c6b7a8Z9Y0X1W2V3U4T5S6R7Q8P9',
    alt: 'Commercial container vessel cutting through deep water with bow wake hydrodynamics'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        resolve({ success: false, status: res.statusCode });
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve({ success: true });
      });
    }).on('error', (err) => {
      resolve({ success: false, error: err.message });
    });
  });
}

// Read actual image URLs from code.html files directly to get 100% exact links
const manifest = JSON.parse(fs.readFileSync('d:/mci/image_manifest.json', 'utf8'));
const urlToPages = {};
for (const p in manifest) {
  manifest[p].forEach(item => {
    if (!urlToPages[item.src]) {
      urlToPages[item.src] = { pages: [p], alt: item.alt };
    }
  });
}

async function run() {
  const entries = Object.entries(urlToPages);
  console.log(`Starting download of ${entries.length} assets...`);
  const downloadedMap = {};
  let idx = 0;
  for (const [url, meta] of entries) {
    idx++;
    const ext = url.includes('.png') ? '.png' : '.jpg';
    const pagePrefix = meta.pages[0].replace(/^mci_/, '').slice(0, 15);
    const filename = `asset_${idx}_${pagePrefix}${ext}`;
    const dest = path.join(targetDir, filename);
    const res = await download(url, dest);
    console.log(`[${idx}/${entries.length}] ${filename}: ${res.success ? 'OK' : 'FAILED (' + (res.status || res.error) + ')'}`);
    downloadedMap[url] = {
      localPath: `./assets/images/${filename}`,
      alt: meta.alt,
      pages: meta.pages,
      success: res.success
    };
  }
  fs.writeFileSync('d:/mci/public/assets/images_map.json', JSON.stringify(downloadedMap, null, 2));
  console.log('Saved images_map.json');
}

run();
