var Glob = require("glob").Glob;
  new Glob("src/**/*.*", { ignore: '**/__*/**' }, (er, files) =>
  console.log(files)
);
  new Glob("src/**/*.*", { ignore: 'src/**/__mocks__/**/*.js' }, (er, files) =>
  console.log(files)
);
  new Glob("src/**/*.*", { ignore: 'src/__mocks__/**/*.js' }, (er, files) =>
  console.log(files)
);




