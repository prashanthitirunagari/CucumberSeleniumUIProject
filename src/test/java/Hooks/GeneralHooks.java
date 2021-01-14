package Hooks;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import Utils.SeleniumDriver;

public class GeneralHooks {
	
	@Before
	public void setup(Scenario name){
		SeleniumDriver.InitializeDriver();
		//name.getName();
		//name.getStatus();
	}
	
	
	
	@After
	public void tearDown(Scenario scenario){
		if(scenario.isFailed()){
			byte[] screenshotBytes = ((TakesScreenshot) SeleniumDriver.driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshotBytes, "image/png");
		}
		if (SeleniumDriver.driver != null) {
			SeleniumDriver.driver.close();
			//SeleniumDriver.driver.quit();
        }
        
	}
}
