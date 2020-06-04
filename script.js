// require('chromedriver');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    chrome = require('chromedriver');
// const {Builder, By, Key, until, Button} = require('selenium-webdriver');
// var By = require('selenium-webdriver/lib/by');
var i = 1;
// while (true) {

// }
// for (var i = 0; true; i++) {
  // console.log(i);
  // i++
const handleDriver = async () => {

  var driver = await new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  await driver.get('http://2020cloud.cibexpo.org.cn/vtour.shtml');
  // driver.findElement(By.className('enter_index_map')).click();
  // driver.wait(until.elementLocated(By.xpath('//div[@class="enter_index_map"]/span[25]'), 100));

  await driver.findElement(By.xpath('//div[@class="enter_index_map"]/span[25]')).click()
  await driver.sleep(2000);//毫秒
  // driver.close()
  await driver.quit()
  console.log(i);
  i++
  handleDriver()
}

// for (var i = 0; ; i++) {
  // console.log(i);
  handleDriver()
// }

// }
