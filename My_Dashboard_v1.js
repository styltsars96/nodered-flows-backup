[{"id":"be00a325.0b9ac","type":"OS","z":"f28be781.398928","name":"","x":304.50000762939453,"y":68.50000190734863,"wires":[["a8f2934c.b7e3b","389e8e9.7fc4872","94b5a718.4e7a98","6b923c38.02e3c4"]]},{"id":"39512ac.30520d6","type":"inject","z":"f28be781.398928","name":"update","topic":"","payload":"","payloadType":"date","repeat":"10","crontab":"","once":true,"x":115.25,"y":106.75000190734863,"wires":[["be00a325.0b9ac","bda57bd1.42fa28"]]},{"id":"c86e9b04.3873d8","type":"comment","z":"f28be781.398928","name":"OS","info":"","x":85.5,"y":62.75,"wires":[]},{"id":"a8f2934c.b7e3b","type":"function","z":"f28be781.398928","name":"hostname","func":"msg.payload = msg.payload.hostname; \n\nreturn msg;","outputs":1,"noerr":0,"x":497.50000762939453,"y":41.25000190734863,"wires":[["5a1bc8fb.f32858"]]},{"id":"5a1bc8fb.f32858","type":"ui_text","z":"f28be781.398928","group":"3ff30067.e226e","order":2,"width":0,"height":0,"name":"Untitled Theme 1","label":"Hostname","format":"{{msg.payload}}","layout":"row-spread","x":710,"y":20,"wires":[]},{"id":"d94cc22e.625c","type":"ui_text","z":"f28be781.398928","group":"3ff30067.e226e","order":1,"width":0,"height":0,"name":"OS","label":"OS","format":"{{msg.payload}}","layout":"row-spread","x":665.0000076293945,"y":80.00000190734863,"wires":[]},{"id":"389e8e9.7fc4872","type":"function","z":"f28be781.398928","name":"osType","func":"msg.payload = msg.payload.type; \nreturn msg;","outputs":1,"noerr":0,"x":500.00000762939453,"y":87.50000381469727,"wires":[["d94cc22e.625c"]]},{"id":"94b5a718.4e7a98","type":"function","z":"f28be781.398928","name":"platform","func":"msg.payload = msg.payload.platform; \nreturn msg;","outputs":1,"noerr":0,"x":498.75000762939453,"y":136.25000381469727,"wires":[["8ea0ab4c.498838"]]},{"id":"6b923c38.02e3c4","type":"function","z":"f28be781.398928","name":"arch","func":"msg.payload = msg.payload.arch;\nreturn msg;","outputs":1,"noerr":0,"x":491.25000762939453,"y":178.75000381469727,"wires":[["6ca75b9f.75e8a4"]]},{"id":"8ea0ab4c.498838","type":"ui_text","z":"f28be781.398928","group":"3ff30067.e226e","order":0,"width":0,"height":0,"name":"platform","label":"platform","format":"{{msg.payload}}","layout":"row-spread","x":673.7500076293945,"y":121.25000381469727,"wires":[]},{"id":"6ca75b9f.75e8a4","type":"ui_text","z":"f28be781.398928","group":"3ff30067.e226e","order":0,"width":0,"height":0,"name":"arch","label":"Arch","format":"{{msg.payload}}","layout":"row-spread","x":666.2500076293945,"y":165.00000381469727,"wires":[]},{"id":"b416fed0.7ab69","type":"function","z":"f28be781.398928","name":"","func":"msg.payload = msg.payload.memusage;\nreturn msg;","outputs":1,"noerr":0,"x":496.25000381469727,"y":280.00000762939453,"wires":[["f31c99d0.3413b8"]]},{"id":"f31c99d0.3413b8","type":"ui_gauge","z":"f28be781.398928","name":"Memory Usage","group":"cab60dab.96f0b","order":1,"width":"0","height":"0","gtype":"gage","title":"1 Minute","label":"Usage","format":"{{value | number:2}}","min":0,"max":"100","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":671.5000076293945,"y":276.50000762939453,"wires":[]},{"id":"8221e7ae.784148","type":"function","z":"f28be781.398928","name":"","func":"function formatBytes(bytes,decimals) {\n   if(bytes === 0) return '0 Byte';\n   var k = 1000; // or 1024 for binary\n   var dm = decimals + 1 || 3;\n   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];\n   var i = Math.floor(Math.log(bytes) / Math.log(k));\n   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];\n}\n\nmsg.payload = formatBytes(msg.payload.totalmem);\nreturn msg;","outputs":1,"noerr":0,"x":500.75000381469727,"y":320.50000858306885,"wires":[["f17cceb3.346ca"]]},{"id":"37846ab4.2304a6","type":"function","z":"f28be781.398928","name":"","func":"function formatBytes(bytes,decimals) {\n   if(bytes === 0) return '0 Byte';\n   var k = 1000; // or 1024 for binary\n   var dm = decimals + 1 || 3;\n   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];\n   var i = Math.floor(Math.log(bytes) / Math.log(k));\n   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];\n}\n\nmsg.payload = formatBytes(msg.payload.freemem);\nreturn msg;","outputs":1,"noerr":0,"x":502.50000762939453,"y":360.25000953674316,"wires":[["d29d951.b415868"]]},{"id":"f17cceb3.346ca","type":"ui_text","z":"f28be781.398928","group":"cab60dab.96f0b","order":2,"width":"0","height":"0","name":"","label":"Total Memory","format":"{{msg.payload}}","layout":"row-spread","x":673.0000076293945,"y":319.5000057220459,"wires":[]},{"id":"d29d951.b415868","type":"ui_text","z":"f28be781.398928","group":"cab60dab.96f0b","order":3,"width":"0","height":"0","name":"","label":"Free Memory","format":"{{msg.payload}}","layout":"row-spread","x":658.2500076293945,"y":361.25000858306885,"wires":[]},{"id":"f8dc75c1.69e398","type":"function","z":"f28be781.398928","name":"","func":"msg.payload = msg.payload.memusage;\nreturn msg;","outputs":1,"noerr":0,"x":498.25000762939453,"y":237.25000667572021,"wires":[["24db1b98.718ea4"]]},{"id":"24db1b98.718ea4","type":"ui_chart","z":"f28be781.398928","name":"Memory - 24 Hours","group":"cab60dab.96f0b","order":0,"width":"0","height":"0","label":"24 Hours","chartType":"line","legend":"false","xformat":"%H:%M:%S","interpolate":"linear","nodata":"","dot":false,"ymin":"","ymax":"","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"86400","cutout":"","useOneColor":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"useOldStyle":true,"x":682.5000076293945,"y":229.00000762939453,"wires":[[],[]]},{"id":"2dde845c.e2794c","type":"comment","z":"f28be781.398928","name":"Memory Usage","info":"","x":303.75000762939453,"y":141.50000286102295,"wires":[]},{"id":"bda57bd1.42fa28","type":"Memory","z":"f28be781.398928","name":"","x":305.00000762939453,"y":193.7500057220459,"wires":[["f8dc75c1.69e398","b416fed0.7ab69","8221e7ae.784148","37846ab4.2304a6"]]},{"id":"2edc0100.2d43c","type":"openweathermap in","z":"f28be781.398928","name":"Weather","wtype":"current","lon":"","lat":"","city":"Athens","country":"Greece","language":"en","x":120,"y":600.0000085830688,"wires":[["30bfd62b.90799a","7ae05ea.2f6f9a","9751c87e.ee3b88","8040d889.835888","3ec14835.b48908"]]},{"id":"86576cc4.3e0e5","type":"ui_text","z":"f28be781.398928","group":"219c7042.8fd5e","order":0,"width":0,"height":0,"name":"wather","label":"weather today","format":"{{msg.payload}}","layout":"row-spread","x":515.0000076293945,"y":561.2500095367432,"wires":[]},{"id":"30bfd62b.90799a","type":"function","z":"f28be781.398928","name":"weatherState","func":"msg.payload = msg.payload.weather\nreturn msg;","outputs":1,"noerr":0,"x":323.75000762939453,"y":576.2500095367432,"wires":[["86576cc4.3e0e5"]]},{"id":"319328eb.3526c8","type":"comment","z":"f28be781.398928","name":"weather","info":"","x":111.25,"y":557.5000081062317,"wires":[]},{"id":"7ae05ea.2f6f9a","type":"function","z":"f28be781.398928","name":"Loacation","func":"msg.payload = msg.payload.location\nreturn msg;","outputs":1,"noerr":0,"x":315.00000762939453,"y":612.5000095367432,"wires":[["43419d60.053a94"]]},{"id":"9751c87e.ee3b88","type":"function","z":"f28be781.398928","name":"detail","func":"msg.payload = msg.payload.detail;\nreturn msg;","outputs":1,"noerr":0,"x":308.75000381469727,"y":658.7500095367432,"wires":[["692f59.92bed0a8"]]},{"id":"43419d60.053a94","type":"ui_text","z":"f28be781.398928","group":"219c7042.8fd5e","order":0,"width":0,"height":0,"name":"Location","label":"Location","format":"{{msg.payload}}","layout":"row-spread","x":521.25,"y":611.25,"wires":[]},{"id":"692f59.92bed0a8","type":"ui_text","z":"f28be781.398928","group":"219c7042.8fd5e","order":0,"width":0,"height":0,"name":"detail","label":"detail","format":"{{msg.payload}}","layout":"row-spread","x":512.5000076293945,"y":657.5000095367432,"wires":[]},{"id":"8040d889.835888","type":"function","z":"f28be781.398928","name":"description","func":"msg.payload = msg.payload.description\nreturn msg;","outputs":1,"noerr":0,"x":325.00000381469727,"y":698.7500114440918,"wires":[["9e422fca.aea8f"]]},{"id":"9e422fca.aea8f","type":"ui_text","z":"f28be781.398928","group":"219c7042.8fd5e","order":0,"width":0,"height":0,"name":"description","label":"","format":"{{msg.payload}}","layout":"row-center","x":531.2500076293945,"y":698.7500104904175,"wires":[]},{"id":"3ec14835.b48908","type":"debug","z":"f28be781.398928","name":"","active":true,"console":"false","complete":"true","x":260,"y":851,"wires":[]},{"id":"3ff30067.e226e","type":"ui_group","z":"","name":"Sysinfo","tab":"e2ccb975.c65bc8","order":1,"disp":true,"width":"6"},{"id":"cab60dab.96f0b","type":"ui_group","z":"","name":"Memory","tab":"e2ccb975.c65bc8","order":2,"disp":true,"width":"6"},{"id":"219c7042.8fd5e","type":"ui_group","z":"","name":"Weather","tab":"e2ccb975.c65bc8","order":5,"disp":true,"width":"6"},{"id":"e2ccb975.c65bc8","type":"ui_tab","z":"","name":"SteliosVM","icon":""}]
