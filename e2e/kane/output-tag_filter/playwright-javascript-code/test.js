import testmu, { resolveVar, setVar } from '@testmuai/playwright-bindings';
import { expect } from '@playwright/test';

testmu.configure({
  "build": "cf0ce507-718f-4c86-8afd-fd4977e5b622",
  "name": "Browse Repositories by Tag",
  "tcId": "TC-154",
  "network": (process.env.NETWORK ?? "false").toLowerCase() === "true",
  "autoHealVersion": "AH2",
  "defaultActionTimeoutMs": 10000,
  "defaultNavigationTimeoutMs": 60000,
  "kaneRunV4": true
});

testmu.test("Browse Repositories by Tag", async (page) => {
  let element_0;
  await testmu.step("Navigate to http://localhost:3000", { instructionId: "83a22e11-bb2d-4a5d-85aa-4baae73b52fe" }, async () => {
    await page.goto("http://localhost:3000");
  });
  
  await testmu.step("Reading the Browse by tag heading", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("browse_by_tag_text_check", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {46: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(46).textContent);\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=heading[name=\"Browse by tag\"i]"], query: "the Browse by tag heading text", expectedValue: "Browse by tag", needsUnitConversion: false, operator: "contains", transforms: ["strip", "lowercase"], condition: "The page contains the text \"Browse by tag\"." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "785c42ff-3bbb-4f96-a90d-389c0aded2b8" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "The page contains the text \"Browse by tag\".", "passed": true, "operator": "contains", "transforms": ["strip", "lowercase"], "json_path": null, "expected": "Browse by tag", "extracted_value": "{{browse_by_tag_text_check}}", "store_key": "browse_by_tag_text_check", "variable_refs": {"{{browse_by_tag_text_check}}": "Browse by tag"}}], "sub_checks": [{"description": "The page contains the text \"Browse by tag\".", "store_key": "browse_by_tag_text_check", "expected_value": "Browse by tag", "extracted_value": "{{browse_by_tag_text_check}}", "operator": "contains", "transforms": ["strip", "lowercase"]}], "composite_operator": "and", "claim": "the page contains the text \"Browse by tag\""});
  });
  
  await testmu.step("Clicking hacktoberfest tag link", { instructionId: "d9e7431d-88de-4afb-858f-df76473ec3c9" }, async () => {
    element_0 = page.locator("internal:role=link[name=\"hacktoberfest\"i]");
    await element_0.click();
  });
  
  await testmu.step("Waiting for the results page to finish loading", { instructionId: "56ca9511-9d3d-47de-93ef-bbbc1fe3fd9c" }, async () => {
    await page.waitForTimeout(1000);
  });
  
  await testmu.step("Reading the current page URL", { instructionId: "c276d8cd-13ee-41f8-bbd8-1c10e07f0e9c" }, async () => {
    setVar("tag_url_check", page.url());
  });
  
  await testmu.step("Checking for a repository title link", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("repository_title_link_check", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {75: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(75) instanceof HTMLAnchorElement && /^Open [^/]+\\/[^ ]+ on GitHub$/.test(el(75).getAttribute('aria-label') || el(75).getAttribute('title') || el(75).getAttribute('data-tooltip') || el(75).getAttribute('href') || '') || /^https:\\/\\/github\\.com\\/[^/]+\\/[^/]+\\/?$/.test(el(75).href));\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=link[name=\"litmuschaos / litmus\"i]"], query: "whether a repository title link is present in the repository results", expectedValue: "true", needsUnitConversion: false, operator: "equals", transforms: [], condition: "At least one repository title link is on the page." }));
  });
  
  await testmu.step("Assertion check", { instructionId: "d436f902-9594-4ff4-8f07-af2f20bc7443" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "The URL contains \"/tag/\".", "passed": true, "operator": "contains", "transforms": [], "json_path": null, "expected": "/tag/", "extracted_value": "{{tag_url_check}}", "store_key": "tag_url_check", "variable_refs": {"{{tag_url_check}}": "http://localhost:3000/tag/hacktoberfest"}}, {"description": "At least one repository title link is on the page.", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "{{repository_title_link_check}}", "store_key": "repository_title_link_check", "variable_refs": {"{{repository_title_link_check}}": "true"}}], "sub_checks": [{"description": "The URL contains \"/tag/\".", "store_key": "tag_url_check", "expected_value": "/tag/", "extracted_value": "{{tag_url_check}}", "operator": "contains", "transforms": []}, {"description": "At least one repository title link is on the page.", "store_key": "repository_title_link_check", "expected_value": "true", "extracted_value": "{{repository_title_link_check}}", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "Verify the URL contains \"/tag/\" and at least one repository title link is on the page."});
  });
});

testmu.run();