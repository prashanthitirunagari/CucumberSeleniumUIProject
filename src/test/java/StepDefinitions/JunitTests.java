package StepDefinitions;

import java.util.List;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import Utils.SeleniumDriver;
import Utils.SeleniumHelper;
import Utils.SeleniumHelper.Locator;
import WebPages.PageLocators.SpiceJetHomePage;

public class JunitTests extends SeleniumDriver{
	
	@Test
	public void general() throws InterruptedException {
		SeleniumDriver.InitializeDriver();
		SeleniumDriver.openPage("https://www.spicejet.com/");
		SeleniumHelper.ObjectRadio(SpiceJetHomePage.roundTripRadio, Locator.Id,  "SelectValue", "");
		SeleniumHelper.ObjectButton(SpiceJetHomePage.fromDropdown, Locator.Id, "Click");
		driver.findElement(By.xpath("//a[@value='DEL']")).click();
	    SeleniumHelper.ObjectButton(SpiceJetHomePage.toDropdown, Locator.Id, "Click");
	    driver.findElement(By.xpath("//a[@value='HYD']")).click();
	    //SeleniumHelper.ObjectDropdown(SpiceJetHomePage.toDropdown, Locator.Id, "SelectValue", "Hyderabad (HYD)");
	    
	    //
	    SeleniumHelper.ObjectButton(SpiceJetHomePage.currentDate, Locator.CssSelector, "Click");
	    SeleniumHelper.ObjectButton(SpiceJetHomePage.returnDate, Locator.Id, "Click");
	    List<WebElement> elements = driver.findElements(By.xpath("//a[@class='ui-state-default']"));
	    System.out.println(elements.size());
	    for(int i=0;i<elements.size();i++) {
	    	System.out.println(elements.get(i).getText());
	    	if(elements.get(i).getText().equals("20")) {
	    		elements.get(i).click();
	    	}
	    } 
	    //driver.findElement(By.cssSelector(".ui-state-default.ui-state-highlight.ui-state-active")).click();
	    SeleniumHelper.ObjectButton(SpiceJetHomePage.passengers, Locator.Id, "Click");
	    SeleniumHelper.ObjectDropdown(SpiceJetHomePage.adult, Locator.Id, "SelectValue", "5");
	    SeleniumHelper.ObjectDropdown(SpiceJetHomePage.currency, Locator.Id, "SelectValue", "GBP");
		SeleniumHelper.ObjectButton(SpiceJetHomePage.search, Locator.Id, "Click");
	}

}
