import fs from 'fs';
import path from 'path';
import https from 'https';

const IMAGES = [
  // Hero & Global Sections
  { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/hero/hero-villa.jpg' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/hero/values-philosophy.jpg' },
  { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/hero/kitchen-detail.jpg' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/hero/aerial-coastal.jpg' },
  { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/hero/sprawling-sanctuary.jpg' },
  { url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/hero/macaw-parrot.jpg' },
  { url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/hero/spa-wellness.jpg' },
  { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/hero/culinary-dining.jpg' },
  { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/hero/luxury-interior.jpg' },

  // Orchard Villa
  { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/orchard-main.jpg' },
  { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/residences/orchard-left.jpg' },
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/orchard-right-top.jpg' },
  { url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/orchard-pool.jpg' },
  { url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/orchard-courtyard.jpg' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/orchard-water.jpg' },
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/orchard-lounge.jpg' },
  { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/orchard-night.jpg' },
  { url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/orchard-outdoor-lounge.jpg' },
  { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/orchard-indoor-living.jpg' },
  { url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/orchard-living-room.jpg' },
  { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/orchard-bedroom-detail.jpg' },
  { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/orchard-bathroom.jpg' },
  { url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/orchard-bedroom-suite.jpg' },

  // Meadow Estate
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/meadow-main.jpg' },
  { url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/residences/meadow-left.jpg' },
  { url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/meadow-right-top.jpg' },
  { url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/meadow-pool.jpg' },
  { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/meadow-courtyard.jpg' },
  { url: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/meadow-water.jpg' },
  { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/meadow-lounge.jpg' },
  { url: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/meadow-night.jpg' },
  { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/meadow-outdoor-lounge.jpg' },
  { url: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/meadow-indoor-living.jpg' },
  { url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/meadow-living-room.jpg' },
  { url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/meadow-bedroom-detail.jpg' },
  { url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/meadow-bathroom.jpg' },
  { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/meadow-bedroom-suite.jpg' },

  // Palma Residence
  { url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/palma-main.jpg' },
  { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/residences/palma-left.jpg' },
  { url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/palma-right-top.jpg' },
  { url: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/palma-pool.jpg' },
  { url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/palma-courtyard.jpg' },
  { url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/palma-water.jpg' },
  { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/palma-lounge.jpg' },
  { url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/palma-night.jpg' },
  { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/palma-outdoor-lounge.jpg' },
  { url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/palma-indoor-living.jpg' },
  { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/palma-living-room.jpg' },
  { url: 'https://images.unsplash.com/photo-1540518614846-7ede433c5173?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/palma-bedroom-detail.jpg' },
  { url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/palma-bathroom.jpg' },
  { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/palma-bedroom-suite.jpg' },

  // Solis Estate
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/solis-main.jpg' },
  { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/residences/solis-left.jpg' },
  { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/solis-right-top.jpg' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/solis-pool.jpg' },
  { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/solis-courtyard.jpg' },
  { url: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/solis-water.jpg' },
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/solis-lounge.jpg' },
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/solis-night.jpg' },
  { url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/solis-outdoor-lounge.jpg' },
  { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/solis-indoor-living.jpg' },
  { url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/solis-living-room.jpg' },
  { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/solis-bedroom-detail.jpg' },
  { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/solis-bathroom.jpg' },
  { url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/solis-bedroom-suite.jpg' },

  // Luna Residence
  { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/luna-main.jpg' },
  { url: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=85', dest: 'public/images/residences/luna-left.jpg' },
  { url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/luna-right-top.jpg' },
  { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/luna-pool.jpg' },
  { url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/luna-courtyard.jpg' },
  { url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/luna-water.jpg' },
  { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/luna-lounge.jpg' },
  { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/luna-night.jpg' },
  { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/luna-outdoor-lounge.jpg' },
  { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/luna-indoor-living.jpg' },
  { url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/luna-living-room.jpg' },
  { url: 'https://images.unsplash.com/photo-1540518614846-7ede433c5173?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/residences/luna-bedroom-detail.jpg' },
  { url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/luna-bathroom.jpg' },
  { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85', dest: 'public/images/residences/luna-bedroom-suite.jpg' },
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${IMAGES.length} Unsplash images...`);
  for (let i = 0; i < IMAGES.length; i++) {
    const item = IMAGES[i];
    const fullDest = path.join(process.cwd(), item.dest);
    try {
      await downloadFile(item.url, fullDest);
      console.log(`[${i + 1}/${IMAGES.length}] Downloaded: ${item.dest}`);
    } catch (e) {
      console.error(`Failed to download ${item.url}:`, e.message);
    }
  }
  console.log('Finished downloading all Unsplash images!');
}

run();
