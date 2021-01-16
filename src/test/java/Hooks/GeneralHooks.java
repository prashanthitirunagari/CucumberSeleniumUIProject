package Hooks;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import Utils.SeleniumDriver;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class GeneralHooks {
	
	@Before()
	public void setup(Scenario name){
		SeleniumDriver.InitializeDriver();
		SeleniumDriver.openPage(SeleniumDriver.url);
	}
	
	
	
	@After
	public void tearDown(Scenario scenario){
		if(scenario.isFailed()){
			byte[] screenshotBytes = ((TakesScreenshot) SeleniumDriver.driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshotBytes, "image/png");
		}
		if (SeleniumDriver.driver != null) {
			SeleniumDriver.driver.close();
        }
        
	}
}
