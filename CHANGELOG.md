## [0.3.1](https://github.com/TelestionTeam/telestion-rocketsound-psc/compare/v0.3.0...v0.3.1) (2021-04-10)


### Bug Fixes

* Make project compatible with Telestion-Client v0.12.0 ([2e006e7](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/2e006e70f42759c866771a3c07f0fa7c87e45c3a))
* Mock server plugin ([d766f91](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/d766f91095478ca72019d26032765cab30240734))



# [0.3.0](https://github.com/TelestionTeam/telestion-rocketsound-psc/compare/v0.2.0...v0.3.0) (2021-03-11)


### Bug Fixes

* **model:** Fix height of amplitude graph widget ([17f279e](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/17f279e8da316d7b86845198f359d90f2ffd3000))
* **plugin:** Update mock server plugin to be conform with new data message format ([0daccce](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/0daccce8aaae7a43a527958cbdd8c6f0adf6b4a9))
* **widget:** Fix map widget to be conform with GPS data message type ([96b66ad](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/96b66adc234d1af00ba8f57f077c7060182a2cb5))
* **widget:** Rename states in flight state widget ([5856f52](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/5856f52147a921bc4c6f4287fb539b86f4bc278e))


### Features

* **model:** Amplitude graph now scales logarithmic ([9a3e4eb](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/9a3e4ebd512d7bfc1076e3503258fb1f7820123c))
* **model:** Re-structure user configuration and add more dashboards based on https://github.com/TelestionTeam/telestion-rocketsound-psc/issues/69 ([1bd0dc2](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/1bd0dc2af2b3e7c33edf26de578c2fb835ef12b9))
* **model:** Update user configuration ([be2a79d](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/be2a79d270592617fb5cee088fb413f6eb159ac2))
* **widget:** Add connection status light to GPS details widget ([03024fc](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/03024fce92e38b64b33ae9ab854adeab2775acf3))
* **widget:** Change status light descriptions and hide status light before first message in GPS details widget ([4cfcaa8](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/4cfcaa870ba8edc346ce5c3b86637dfa2b86032c))
* **widget:** Enhance Map widget ([fda5138](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/fda5138d8b10b9981fbb6ce7234cb5aeb3ac3990))
* **widget:** Implement GPS details widget ([ce41cc2](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/ce41cc26bdf2d04d446c88dab67807f10d2db0dc))
* **widget:** Implement placeholder widget and add it to Sounding Rocket dashboard ([8408ca0](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/8408ca08a9615e41fecdc4f237d4607d34ba685a))
* **widget:** Improve graph widget ([7802fd5](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/7802fd5bfdc6ec06288603153eeadf702487d624))
* **widget:** Initialize GPS details widget ([9f9cdbf](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/9f9cdbfb180f1e3d1cc7606344d485226c4cc3da))
* **widget:** Initialize placeholder widget ([0db5189](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/0db5189e6f69c249321fdaba7d945efa0a6279c9))
* **widget:** Re-implement 9-DOF widget to remove some weird errors and behaviours ([940a68a](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/940a68a06098a024e94427f5751b8c91fb8b351d))
* **widget:** Remove divider from details map in GPS details widget ([a692566](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/a69256612f002165acb3dfd25820b5ece6eb466e))



# [0.2.0](https://github.com/TelestionTeam/telestion-rocketsound-psc/compare/v0.1.0...v0.2.0) (2021-03-02)


### Features

* **dashboard:** Add BaroData graphs ([45a2a60](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/45a2a6017c4d7beb043c02dc0ee9036caffe5954))
* **widget:** In graph widget enable and disable state of tooltip is now possible ([e451b92](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/e451b929297979cc9fa30fde23229d3fa65c512e))



# [0.1.0](https://github.com/TelestionTeam/telestion-rocketsound-psc/compare/bf48d3371770e24e7dd04b0027f03307f0303c19...v0.1.0) (2021-03-02)


### Bug Fixes

* Fix warnings to allow `tc-cli build` to succeed ([037203f](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/037203ff122dede776410a5425492ba2c10ba0a4))
* **deps:** Fix compatibility issues and update dependencies ([ab991b7](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/ab991b793e18b7957fd04b5ecfb72390fd1d1ad1))
* **widget:** Clean up imports, document parts, extract and move code ([1ff46f9](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/1ff46f9a4519f63b14fb6d92b6d994277f8e7aac))
* **widget:** Graph widget does not throw if event bus is not defined ([9edfabe](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/9edfabe4dccd7a21d58d67dbd8f24ae6f910542d))


### Features

* **widget:** Add deep object extraction and fix styles ([696ef65](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/696ef65da39fea9d4a3d932540e8c7b4841e58de))
* **widget:** Add hold on hover, custom tooltip, area chart and more configuration options ([fe5d3ec](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/fe5d3ecb93c0f5182ad6b7d1f841bd1071296212))
* **widget:** Enhance 9dof table widget ([#56](https://github.com/TelestionTeam/telestion-rocketsound-psc/issues/56)) ([0add43a](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/0add43ad6bd4ec78b86bffc2c2644d725e9a0606))
* **widget:** First implementation of graph widget ([58e1cdc](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/58e1cdca0ae6505d1655daf7fdcfb0a16c768b16))
* **widget:** Implement FlightState Widget ([ee2e980](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/ee2e980cb09b2f82cf604ddf052b722e8ddabd00))
* **widget:** Implement Map Widget ([ab54979](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/ab54979a927dc182ed4e053f9d2a355d7b3b7811))
* **widget:** Initialize line graph widget ([18dfd4e](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/18dfd4e5400c897e862a167bd8cda4d48796f815))
* **widgets:** Implement Waveform - and Spectrogram widgets ([#11](https://github.com/TelestionTeam/telestion-rocketsound-psc/issues/11)) ([9178004](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/9178004263454ee9b27409e29b628e63b9f594fc))
* Add mock server plugin ([332db1f](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/332db1f8ba261a458d0340a3899091dc1195e18a))
* Add mock server plugin for development ([bf48d33](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/bf48d3371770e24e7dd04b0027f03307f0303c19))
* Implement 9DoF widget and more ([83e68df](https://github.com/TelestionTeam/telestion-rocketsound-psc/commit/83e68df52b5d2e1eb551867464a491b6ae89b068))



