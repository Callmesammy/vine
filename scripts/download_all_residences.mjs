import fs from 'fs';
import path from 'path';
import https from 'https';

const RESIDENCE_IMAGES = [
  // Orchard Villa
  { name: 'orchard-main.jpg', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85' },
  { name: 'orchard-left.jpg', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85' },
  { name: 'orchard-right-top.jpg', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85' },
  { name: 'orchard-pool.jpg', url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85' },
  { name: 'orchard-courtyard.jpg', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85' },
  { name: 'orchard-water.jpg', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85' },
  { name: 'orchard-lounge.jpg', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85' },
  { name: 'orchard-night.jpg', url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85' },
  { name: 'orchard-outdoor-lounge.jpg', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85' },
  { name: 'orchard-indoor-living.jpg', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85' },
  { name: 'orchard-living-room.jpg', url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85' },
  { name: 'orchard-bedroom-detail.jpg', url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85' },
  { name: 'orchard-bathroom.jpg', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85' },
  { name: 'orchard-bedroom-suite.jpg', url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85' },

  // Meadow Estate
  { name: 'meadow-main.jpg', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85' },
  { name: 'meadow-left.jpg', url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=85' },
  { name: 'meadow-right-top.jpg', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85' },
  { name: 'meadow-pool.jpg', url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85' },
  { name: 'meadow-courtyard.jpg', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85' },
  { name: 'meadow-water.jpg', url: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85' },
  { name: 'meadow-lounge.jpg', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85' },
  { name: 'meadow-night.jpg', url: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85' },
  { name: 'meadow-outdoor-lounge.jpg', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85' },
  { name: 'meadow-indoor-living.jpg', url: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=85' },
  { name: 'meadow-living-room.jpg', url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85' },
  { name: 'meadow-bedroom-detail.jpg', url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85' },
  { name: 'meadow-bathroom.jpg', url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=85' },
  { name: 'meadow-bedroom-suite.jpg', url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85' },

  // Palma Residence
  { name: 'palma-main.jpg', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85' },
  { name: 'palma-left.jpg', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85' },
  { name: 'palma-right-top.jpg', url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85' },
  { name: 'palma-pool.jpg', url: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=85' },
  { name: 'palma-courtyard.jpg', url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85' },
  { name: 'palma-water.jpg', url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85' },
  { name: 'palma-lounge.jpg', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85' },
  { name: 'palma-night.jpg', url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=85' },
  { name: 'palma-outdoor-lounge.jpg', url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85' },
  { name: 'palma-indoor-living.jpg', url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=85' },
  { name: 'palma-living-room.jpg', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=85' },
  { name: 'palma-bedroom-detail.jpg', url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85' },
  { name: 'palma-bathroom.jpg', url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85' },
  { name: 'palma-bedroom-suite.jpg', url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85' },

  // Solis Estate
  { name: 'solis-main.jpg', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85' },
  { name: 'solis-left.jpg', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85' },
  { name: 'solis-right-top.jpg', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85' },
  { name: 'solis-pool.jpg', url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85' },
  { name: 'solis-courtyard.jpg', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85' },
  { name: 'solis-water.jpg', url: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?auto=format&fit=crop&w=1400&q=85' },
  { name: 'solis-lounge.jpg', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85' },
  { name: 'solis-night.jpg', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85' },
  { name: 'solis-outdoor-lounge.jpg', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85' },
  { name: 'solis-indoor-living.jpg', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85' },
  { name: 'solis-living-room.jpg', url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85' },
  { name: 'solis-bedroom-detail.jpg', url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85' },
  { name: 'solis-bathroom.jpg', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85' },
  { name: 'solis-bedroom-suite.jpg', url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85' },

  // Luna Residence
  { name: 'luna-main.jpg', url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85' },
  { name: 'luna-left.jpg', url: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=85' },
  { name: 'luna-right-top.jpg', url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1400&q=85' },
  { name: 'luna-pool.jpg', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85' },
  { name: 'luna-courtyard.jpg', url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85' },
  { name: 'luna-water.jpg', url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85' },
  { name: 'luna-lounge.jpg', url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=85' },
  { name: 'luna-night.jpg', url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85' },
  { name: 'luna-outdoor-lounge.jpg', url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85' },
  { name: 'luna-indoor-living.jpg', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=85' },
  { name: 'luna-living-room.jpg', url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=85' },
  { name: 'luna-bedroom-detail.jpg', url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85' },
  { name: 'luna-bathroom.jpg', url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85' },
  { name: 'luna-bedroom-suite.jpg', url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(dest);
          if (stats.size < 1000) {
            reject(new Error(`File too small (${stats.size} bytes)`));
          } else {
            resolve();
          }
        });
      });
    }).on('error', reject);
  });
}

async function main() {
  const dir = path.join(process.cwd(), 'public', 'images', 'residences');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  console.log(`Downloading ${RESIDENCE_IMAGES.length} residence images...`);
  for (let i = 0; i < RESIDENCE_IMAGES.length; i++) {
    const item = RESIDENCE_IMAGES[i];
    const target = path.join(dir, item.name);
    try {
      await download(item.url, target);
      console.log(`[${i + 1}/${RESIDENCE_IMAGES.length}] OK: ${item.name}`);
    } catch (e) {
      console.error(`ERROR downloading ${item.name}:`, e.message);
    }
  }
  console.log('Finished downloading residence images!');
}

main();
