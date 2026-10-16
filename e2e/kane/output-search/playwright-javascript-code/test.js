import testmu, { resolveVar, setVar } from '@testmuai/playwright-bindings';
import { expect } from '@playwright/test';

testmu.configure({
  "build": "19258ada-874b-48e1-84a8-98b0aca0bcd7",
  "name": "Search and Validate Repository Results",
  "tcId": "TC-155",
  "network": (process.env.NETWORK ?? "false").toLowerCase() === "true",
  "autoHealVersion": "AH2",
  "defaultActionTimeoutMs": 10000,
  "defaultNavigationTimeoutMs": 60000,
  "kaneRunV4": true
});

testmu.test("Search and Validate Repository Results", async (page) => {
  let element_0, element_1;
  await testmu.step("Navigate to http://localhost:3000", { instructionId: "cdecf5f5-1b60-4a00-ae1c-785218da38f2" }, async () => {
    await page.goto("http://localhost:3000");
  });
  
  await testmu.step("Checking for the project search input", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("search_input_exists", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {73: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(73) instanceof HTMLInputElement && el(73).getAttribute('placeholder') === 'Search in name, description, tags...');\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=textbox[name=\"Search in name, description,\"i]"], query: "whether an input with the placeholder \"Search in name, description, tags...\" is present on the page", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "An input with placeholder \"Search in name, description, tags...\" exists on the page." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "e2cbf2b2-d9ff-481f-a980-147618e1fbb1" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "An input with placeholder \"Search in name, description, tags...\" exists on the page.", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{search_input_exists}}", "store_key": "search_input_exists", "variable_refs": {"{{search_input_exists}}": "true"}}], "sub_checks": [{"description": "An input with placeholder \"Search in name, description, tags...\" exists on the page.", "store_key": "search_input_exists", "expected_value": "true", "extracted_value": "{{search_input_exists}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "an input with placeholder \"Search in name, description, tags...\" exists on the page"});
  });
  
  await testmu.step("Typing react-admin in project search input", { instructionId: "1a663d60-ef61-42c6-bad6-6c7f67889bc2" }, async () => {
    element_0 = page.locator("internal:role=textbox[name=\"Search in name, description,\"i]");
    await element_0.click();
    await element_0.fill("react-admin");
  });
  
  await testmu.step("Waiting for 2000 ms after entering the project search query", { instructionId: "d693d1b4-6e0d-409b-a508-de5890f4b688" }, async () => {
    await page.waitForTimeout(2000);
  });
  
  await testmu.step("Checking for the react-admin link", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("react_admin_link_present", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {75: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (!!el(75) && el(75).tagName === 'A' && el(75).textContent.trim() === 'marmelab / react-admin');\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=link[name=\"marmelab / react-admin\"i]"], query: "whether the link with text \"marmelab / react-admin\" is present", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "The page contains a link with the text \"marmelab / react-admin\"." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "51960d9a-3528-4064-a643-c5eb6503a596" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "The page contains a link with the text \"marmelab / react-admin\".", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{react_admin_link_present}}", "store_key": "react_admin_link_present", "variable_refs": {"{{react_admin_link_present}}": "true"}}], "sub_checks": [{"description": "The page contains a link with the text \"marmelab / react-admin\".", "store_key": "react_admin_link_present", "expected_value": "true", "extracted_value": "{{react_admin_link_present}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "the page contains a link with the text \"marmelab / react-admin\""});
  });
  
  await testmu.step("Typing zzqxnotarealrepo in project search box", { instructionId: "cdb4dddb-a31d-4431-8cc6-05e92ac71023" }, async () => {
    element_1 = page.locator("internal:role=textbox[name=\"Search in name, description,\"i]");
    await element_1.click();
    await element_1.fill("zzqxnotarealrepo");
  });
  
  await testmu.step("Waiting for search results to update", { instructionId: "233fb8db-c063-4a57-a3d2-3d3a558c9890" }, async () => {
    await page.waitForTimeout(2000);
  });
  
  await testmu.step("whether a link with the text \"marmelab / react-admin\" is present on the page", { instructionId: "888d9818-1b92-4f9b-ac63-7917780d66ba" }, async () => {
    setVar("react_admin_link_absent", await testmu.visionQuery(page, "whether a link with the text \"marmelab / react-admin\" is present on the page", ""));
  });
  
  await testmu.step("Assertion check", { instructionId: "316be83f-2e48-4417-b8f6-26f71e9fc62f" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "The page does not contain a link with the text \"marmelab / react-admin\".", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "false", "extracted_value": "{{react_admin_link_absent}}", "store_key": "react_admin_link_absent", "variable_refs": {"{{react_admin_link_absent}}": "false"}}], "sub_checks": [{"description": "The page does not contain a link with the text \"marmelab / react-admin\".", "store_key": "react_admin_link_absent", "expected_value": "false", "extracted_value": "{{react_admin_link_absent}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "the page does not contain a link with the text \"marmelab / react-admin\""});
  });
});

testmu.run();