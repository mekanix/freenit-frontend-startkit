# Freenit Frontend

This repo will be downloaded on `yarn create freenit <project>` and it will be cleaned up for your project. For example `name.ini` will contain the name you provided as `<project>`.

### Shell Scripts
To star development:
```
bin/init.sh
bin/devel.sh
```

To run tests:
```
bin/init.sh
bin/test.sh
```

### CBSD/Reggae
To start development:
```
echo DEVEL_MODE=YES >vars.mk
make devel
```

To run tests:
```
echo DEVEL_MODE=YES >vars.mk
make test
```
