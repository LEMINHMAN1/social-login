var debianConfig = {
  package: 'absolute-sg-ui',
  section: 'base',
  priority: 'important',
  architecture: 'all',
  maintainer: 'Absolute Software Corporation',
  description: 'Service Guarantee UI deployment package',
  _target: 'opt',
  _out: '.',
  version: '1.0.0'
};

module.exports = {
    debianConfig: debianConfig,
};
