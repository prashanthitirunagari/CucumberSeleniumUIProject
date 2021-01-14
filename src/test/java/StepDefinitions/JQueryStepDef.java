package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;

import Utils.SeleniumDriver;
import Utils.SeleniumHelper;
import Utils.SeleniumHelper.Locator;
import WebPages.PageLocators.CommonPageLocators;
import WebPages.PageLocators.jQueryHomePageLocators;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class JQueryStepDef extends SeleniumDriver{

	@Given("^User access jqueryui \"([^\"]*)\" site$")
	public void user_access_jqueryui_site(String url) {
		openPage(url);
	}

	@Then("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String title) {
		if(SeleniumHelper.GetPageTitle().trim().equals(title)){
			Assert.assertTrue("actual and expected are same", true);
		}else{
			Assert.assertFalse(true);
		}
	}

	@Then("^User should see list of \"([^\"]*)\"$")
	public void user_should_see_list_of_menus(String menuName) throws Throwable {
		SeleniumHelper.ObjectLink(menuName,Locator.PartialLinkText,"ObjectExist","");
	}
	
	@When("^User should clicks on \"([^\"]*)\"$")
	public void user_should_clicks_on(String menuName)  {
		//SeleniumHelper.ObjectLink(menuName,Locator.PartialLinkText,"Click","");
		driver.findElement(By.partialLinkText(menuName)).click();
	}

	@Then("^menu screen \"([^\"]*)\" should display$")
	public void menu_screen_should_display(String headerName) {
		String element="";
		gbReturnValue="";
		if(headerName.toLowerCase().equals("jquery ui demos")){
			element = jQueryHomePageLocators.headerDemo;
			}else if(headerName.toLowerCase().equals("download builder")){
			element = jQueryHomePageLocators.headerDownload;
		}else if(headerName.toLowerCase().equals("jquery ui 1.12 api documentation")){
			element = jQueryHomePageLocators.headerAPIDocumentation;
		}else if(headerName.toLowerCase().equals("themeroller")){
			 element = jQueryHomePageLocators.headerThemes;
		}else if(headerName.toLowerCase().equals("development center")){
			 element = jQueryHomePageLocators.headerDevelopment;
		}else if(headerName.toLowerCase().equals("support center")){
			 element = jQueryHomePageLocators.headerSupport;
		}else if(headerName.toLowerCase().equals("about jquery ui")){
			 element = jQueryHomePageLocators.headerAbout;
		}
		SeleniumHelper.ObjectText(element,Locator.XPath,"ReadValue","");
		if (gbReturnValue.trim().equals(headerName)){
			Assert.assertTrue("actual and expected are same", true);
		}else {
			Assert.assertFalse(true);
		
	   }
	}

}
