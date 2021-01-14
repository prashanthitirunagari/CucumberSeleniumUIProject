package StepDefinitions;

import org.openqa.selenium.interactions.Actions;

import Utils.SeleniumDriver;
import Utils.SeleniumHelper;
import Utils.SeleniumHelper.Locator;
import WebPages.PageLocators.jQueryDroppableLocators;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class JQueryDroppableSD extends SeleniumDriver{
	@When("^User should clicks on Droppable link$")
	public void user_should_clicks_on_Droppable_link() {
		SeleniumHelper.ObjectLink("Droppable", Locator.PartialLinkText, "Click", "");
	}

	@When("^User switches to respective frame$")
	public void user_switches_to_respective_frame() {
		driver.switchTo().frame(SeleniumHelper.GetWebElement("demo-frame",Locator.ClassName));  
	}

	@When("^tries to move the drag me object to drop me object$")
	public void tries_to_move_the_drag_me_object_to_drop_me_object() {
		Actions act = new Actions(driver);
		act.dragAndDrop(SeleniumHelper.GetWebElement(jQueryDroppableLocators.draggable,Locator.Id), SeleniumHelper.GetWebElement(jQueryDroppableLocators.droppable,Locator.Id)).build().perform();
	}

	@Then("^User should be should be successfully drag & drop the object$")
	public void user_should_be_should_be_successfully_drag_drop_the_object() {
		driver.switchTo().defaultContent();
	   
	}

}
