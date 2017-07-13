require('dotenv').config();

module.exports = {
  'apps': [{
    'name': process.env.APP_NAME,
    'script': './app.js',
    'cwd': process.env.APP_PATH,
    'error_file': './logs/pm2.app.log',
    'out_file': './logs/pm2.app.log',
    'exec_mode': 'fork_mode',
    'max_memory_restart': '400M',
    'env': {
      'DISPLAY': ':99',
    },
  }],
};
