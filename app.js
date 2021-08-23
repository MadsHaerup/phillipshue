let huejay = require("huejay");

huejay.discover()
  .then(bridges => {
    for (let bridge of bridges) {
      console.log(`Id: ${bridge.id}, IP: ${bridge.ip}`);
    }
  })
  .catch(error => {
    console.log(`An error occurred: ${error.message}`);
  });

  let client = new huejay.Client({
    host:     '192.168.8.100',
    username: 'pCWn821cvbgWo6kgR-9sE2Cy-cKFW1ijBK0zHW5s', // Optional
    timeout:  15000,            // Optional, timeout in milliseconds (15000 is the default)
  });

let user = new client.users.User;

// Optionally configure a device type / agent on the user
user.deviceType = 'my_hue_app_web haerup'; // Default is 'huejay'


  client.users.get()
  .then(user => {
    console.log('Username:', user.username);
    console.log('Device type:', user.deviceType);
    console.log('Create date:', user.created);
    console.log('Last use date:', user.lastUsed);
  });

  client.users.getByUsername('pCWn821cvbgWo6kgR-9sE2Cy-cKFW1ijBK0zHW5s')
  .then(user => {
    console.log(`Username: ${user.username}`);
  })
  .catch((error) => {
    console.log(error.stack);
  });

  client.bridge.ping()
  .then(() => {
    console.log('Successful connection');
  })
  .catch((error) => {
    console.log('Could not connect');
  });

  client.bridge.isAuthenticated()
  .then(() => {
    console.log('Successful authentication');
  })
  .catch(error => {
    console.log('Could not authenticate');
  });

  client.bridge.get()
  .then(bridge => {
    console.log(`Retrieved bridge ${bridge.name}`);
    console.log('  Id:', bridge.id);
    console.log('  Model Id:', bridge.modelId);
    console.log('  Model Name:', bridge.model.name);
    console.log('  Localtime:', bridge.localTime);
  });

  client.lights.scan()
  .then(() => {
    console.log('Started new light scan');
  });

  client.lights.getNew()
  .then(lights => {
    console.log('Found new lights:');
    for (let light of lights) {
      console.log(`Light [${light.id}]:`);
      console.log('  Unique Id:', light.uniqueId);
      console.log('  Model:',     light.model.name);
      console.log('  Reachable:', light.reachable);
    }
  });

  client.lights.getById(16)
  .then(light => {
    console.log('Found light:');
    console.log(`  Light [${light.id}]: ${light.name}`);
  })
  .catch(error => {
    console.log('Could not find light');
    console.log(error.stack);
  });


    client.lights.getById(16)
    .then(light => {
  
      light.brightness = 254;
      light.hue        = 22554;
      light.saturation = 254;
      light.effect = "colorloop";
      light.alert = "lselect";
      light.transitionTime = 0.1;
  
      return client.lights.save(light);
    })
    .then(light => {
      console.log(`Updated light [${light.id}]`);
    })
    .catch(error => {
      console.log('Something went wrong');
      console.log(error.stack);
    });
