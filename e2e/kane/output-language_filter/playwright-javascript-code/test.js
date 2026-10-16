import testmu, { resolveVar, setVar } from '@testmuai/playwright-bindings';
import { expect } from '@playwright/test';

testmu.configure({
  "build": "6fe69bac-abef-41b7-a3ce-3ed4c87798ab",
  "name": "Browse JavaScript Repositories",
  "tcId": "TC-153",
  "network": (process.env.NETWORK ?? "false").toLowerCase() === "true",
  "autoHealVersion": "AH2",
  "defaultActionTimeoutMs": 10000,
  "defaultNavigationTimeoutMs": 60000,
  "kaneRunV4": true
});

testmu.test("Browse JavaScript Repositories", async (page) => {
  let element_0;
  await testmu.step("Navigate to http://localhost:3000", { instructionId: "cd8b58bb-3a10-4550-96b5-baa2c819234f" }, async () => {
    await page.goto("http://localhost:3000");
  });
  
  await testmu.step("Checking whether the Browse by Language heading is present", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("browse_by_language_text", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {24: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(24).textContent.trim().toLowerCase() === 'browse by language');\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=heading[name=\"Browse by Language\"i]"], query: "whether the Browse by Language heading is present", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "The page contains the text \"Browse by Language\"." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "1709c1cb-b179-4a9c-9324-6944926f1224" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "The page contains the text \"Browse by Language\".", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{browse_by_language_text}}", "store_key": "browse_by_language_text", "variable_refs": {"{{browse_by_language_text}}": "true"}}], "sub_checks": [{"description": "The page contains the text \"Browse by Language\".", "store_key": "browse_by_language_text", "expected_value": "true", "extracted_value": "{{browse_by_language_text}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "the page contains the text \"Browse by Language\""});
  });
  
  await testmu.step("Clicking JavaScript language link", { instructionId: "2eedad77-9316-41f3-9321-834a032cc769" }, async () => {
    element_0 = page.locator("internal:role=link[name=\"JavaScript\"s]");
    await element_0.click();
  });
  
  await testmu.step("Waiting 1000 ms for the JavaScript language page to finish loading", { instructionId: "de0ab0df-795d-4fa6-847f-e50d9adb0821" }, async () => {
    await page.waitForTimeout(1000);
  });
  
  await testmu.step("Reading the current page URL", { instructionId: "9d0a7ec5-5929-4bda-87dd-1bba2dcf37ff" }, async () => {
    setVar("javascript_language_url_check", page.url());
  });
  
  await testmu.step("Checking for a repository title link", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("repository_title_link_check", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {75: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (!!(el(75) && el(75).tagName === 'A' && el(75).textContent.trim()));\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=link[name=\"PrismJS / prism\"i]"], query: "whether a repository title link is present in the repository listing", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "At least one repository title link is on the page." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "753bff97-704a-42ac-b33f-eb811b5eeaad" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "The URL contains \"/language/javascript\".", "passed": true, "operator": "contains", "transforms": [], "json_path": null, "expected": "/language/javascript", "extracted_value": "{{javascript_language_url_check}}", "store_key": "javascript_language_url_check", "variable_refs": {"{{javascript_language_url_check}}": "http://localhost:3000/language/javascript"}}, {"description": "At least one repository title link is on the page.", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{repository_title_link_check}}", "store_key": "repository_title_link_check", "variable_refs": {"{{repository_title_link_check}}": "true"}}], "sub_checks": [{"description": "The URL contains \"/language/javascript\".", "store_key": "javascript_language_url_check", "expected_value": "/language/javascript", "extracted_value": "{{javascript_language_url_check}}", "operator": "contains", "transforms": []}, {"description": "At least one repository title link is on the page.", "store_key": "repository_title_link_check", "expected_value": "true", "extracted_value": "{{repository_title_link_check}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "Verify the URL contains \"/language/javascript\" and at least one repository title link is on the page."});
  });
});

testmu.run();