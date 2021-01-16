package StepDefinitions;

import org.junit.Test;
import org.openqa.selenium.By;

import Utils.SeleniumDriver;
import Utils.SeleniumHelper;
import Utils.SeleniumHelper.Locator;
import WebPages.PageLocators.SpiceJetHomePage;

public class JunitTests extends SeleniumDriver{
	
	@Test
	public void general() throws InterruptedException {
		SeleniumDriver.InitializeDriver();
		SeleniumDriver.openPage("https://www.spicejet.com/");
		SeleniumHelper.ObjectRadio(SpiceJetHomePage.oneWayRadio, Locator.Id,  "SelectValue", "");
		SeleniumHelper.ObjectButton(SpiceJetHomePage.fromDropdown, Locator.Id, "Click");
		driver.findElement(By.xpath("//a[@value='DEL']")).click();
	    SeleniumHelper.ObjectButton(SpiceJetHomePage.toDropdown, Locator.Id, "Click");
	    driver.findElement(By.xpath("//a[@value='HYD']")).click();
	    //SeleniumHelper.ObjectDropdown(SpiceJetHomePage.toDropdown, Locator.Id, "SelectValue", "Hyderabad (HYD)");
	    
	    //
	    SeleniumHelper.ObjectButton(SpiceJetHomePage.currentDate, Locator.CssSelector, "Click");
	    //driver.findElement(By.cssSelector(".ui-state-default.ui-state-highlight.ui-state-active")).click();
	    SeleniumHelper.ObjectButton(SpiceJetHomePage.passengers, Locator.Id, "Click");
	    SeleniumHelper.ObjectDropdown(SpiceJetHomePage.adult, Locator.Id, "SelectValue", "2");
	    SeleniumHelper.ObjectDropdown(SpiceJetHomePage.currency, Locator.Id, "SelectValue", "GBP");
		SeleniumHelper.ObjectButton(SpiceJetHomePage.search, Locator.Id, "Click");
	}

}
