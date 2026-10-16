import testmu, { resolveVar, setVar } from '@testmuai/playwright-bindings';
import { expect } from '@playwright/test';

testmu.configure({
  "build": "25165242-43c3-4629-a11c-9c5a925a4837",
  "name": "Verify Repository Link on Homepage",
  "tcId": "TC-152",
  "network": (process.env.NETWORK ?? "false").toLowerCase() === "true",
  "autoHealVersion": "AH2",
  "defaultActionTimeoutMs": 10000,
  "defaultNavigationTimeoutMs": 60000,
  "kaneRunV4": true
});

testmu.test("Verify Repository Link on Homepage", async (page) => {
  await testmu.step("Navigate to http://localhost:3000", { instructionId: "c4a08ca5-0e51-49b7-87a8-dbcd705bb4a3" }, async () => {
    await page.goto("http://localhost:3000");
  });
  
  await testmu.step("Checking the Browse by Language heading", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("browse_by_language_text_check", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {24: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(24).textContent);\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=heading[name=\"Browse by Language\"i]"], query: "whether the page contains the Browse by Language heading", expectedValue: "Browse by Language", needsUnitConversion: false, operator: "contains", transforms: ["strip", "lowercase"], condition: "the page contains the text \"Browse by Language\"" }));
  });
  
  await testmu.step("Checking the Browse by tag heading", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("browse_by_tag_text_check", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {46: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(46).textContent);\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=heading[name=\"Browse by tag\"i]"], query: "whether the page contains the Browse by tag heading", expectedValue: "Browse by tag", needsUnitConversion: false, operator: "contains", transforms: ["strip", "lowercase"], condition: "the page contains the text \"Browse by tag\"" }));
  });
  
  await testmu.step("Assertion check", { instructionId: "6e8d47f1-28bb-498b-8427-e3e0ef574904" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "the page contains the text \"Browse by Language\"", "passed": true, "operator": "contains", "transforms": ["strip", "lowercase"], "json_path": null, "expected": "Browse by Language", "extracted_value": "{{browse_by_language_text_check}}", "store_key": "browse_by_language_text_check", "variable_refs": {"{{browse_by_language_text_check}}": "Browse by Language"}}, {"description": "the page contains the text \"Browse by tag\"", "passed": true, "operator": "contains", "transforms": ["strip", "lowercase"], "json_path": null, "expected": "Browse by tag", "extracted_value": "{{browse_by_tag_text_check}}", "store_key": "browse_by_tag_text_check", "variable_refs": {"{{browse_by_tag_text_check}}": "Browse by tag"}}], "sub_checks": [{"description": "the page contains the text \"Browse by Language\"", "store_key": "browse_by_language_text_check", "expected_value": "Browse by Language", "extracted_value": "{{browse_by_language_text_check}}", "operator": "contains", "transforms": ["strip", "lowercase"]}, {"description": "the page contains the text \"Browse by tag\"", "store_key": "browse_by_tag_text_check", "expected_value": "Browse by tag", "extracted_value": "{{browse_by_tag_text_check}}", "operator": "contains", "transforms": ["strip", "lowercase"]}], "composite_operator": "and", "claim": "the page contains the text \"Browse by Language\" and the text \"Browse by tag\""});
  });
  
  await testmu.step("Reading the first repository title link URL", async () => {
    await page.waitForLoadState("domcontentloaded", { timeout: 5000 });
    setVar("first_repo_url", await testmu.textualAnalyzer(page, { wrappedJs: "(els) => {\n  const __m = {75: 0};\n  const el = (i) => els[__m[i]];\n  const __v = (el(75).href);\n  return (typeof __v === 'boolean' ? String(__v) : __v);\n}", locators: ["internal:role=link[name=\"marmelab / react-admin\"i]"], query: "the href of the first repository title link", expectedValue: "", needsUnitConversion: false, operator: "equals", transforms: ["strip"], condition: "the href of the first repository title link is stored as {{first_repo_url}}" }));
  });
  
  await testmu.step("Reading the first repository URL", { instructionId: "5347bf0c-92b4-434d-a0ff-fc6f00bede40" }, async () => {
    setVar("first_repo_url_github_prefix_check", "https://github.com/marmelab/react-admin");
  });
  
  await testmu.step("Reading the first repository URL", { instructionId: "9cffa2a9-d857-4b7c-8db5-be573692058f" }, async () => {
    setVar("first_repo_url_gitlab_prefix_check", "https://github.com/marmelab/react-admin");
  });
  
  await testmu.step("Assertion check", { instructionId: "de2a403f-cb7f-4e36-8a9f-3f3c712f5b0b" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "{{first_repo_url}} starts with \"https://github.com/\"", "passed": true, "operator": "contains", "transforms": [], "json_path": null, "expected": "https://github.com/", "extracted_value": "{{first_repo_url}}", "store_key": "first_repo_url_github_prefix_check", "variable_refs": {"{{first_repo_url}}": "https://github.com/marmelab/react-admin"}}, {"description": "{{first_repo_url}} starts with \"https://gitlab.com/\"", "passed": false, "operator": "contains", "transforms": [], "json_path": null, "expected": "https://gitlab.com/", "extracted_value": "{{first_repo_url}}", "store_key": "first_repo_url_gitlab_prefix_check", "variable_refs": {"{{first_repo_url}}": "https://github.com/marmelab/react-admin"}}], "sub_checks": [{"description": "{{first_repo_url}} starts with \"https://github.com/\"", "store_key": "first_repo_url_github_prefix_check", "expected_value": "https://github.com/", "extracted_value": "{{first_repo_url}}", "operator": "contains", "transforms": []}, {"description": "{{first_repo_url}} starts with \"https://gitlab.com/\"", "store_key": "first_repo_url_gitlab_prefix_check", "expected_value": "https://gitlab.com/", "extracted_value": "{{first_repo_url}}", "operator": "contains", "transforms": []}], "composite_operator": "or", "claim": "{{first_repo_url}} starts with \"https://github.com/\" or \"https://gitlab.com/\"."});
  });
});

testmu.run();