describe("Polling App Test Scenarios", () => {
  context("Poll Creation and Voting Flow", () => {
    
    it("should create a new poll and vote successfully", () => {
      cy.visit("http://localhost:3000");
      cy.contains("Create New Poll").click();

      cy.get('input[name="question"]').type("Which framework is best?");
      cy.get('input[name="option1"]').type("React");
      cy.get('input[name="option2"]').type("Angular");
      cy.get('input[name="option3"]').type("Vue");
      cy.get('input[name="option4"]').type("Svelte");

      cy.contains("Create Poll").click();
      cy.contains("Which framework is best?").should("exist");

      cy.contains("Which framework is best?")
        .parent()
        .contains("Vote")
        .click();

      cy.contains("React").click();
      cy.url().should("include", "/results/");
    });

    it("should show validation error if form is empty", () => {
      cy.visit("http://localhost:3000/create");
      cy.contains("Create Poll").click();
      cy.url().should("include", "/create"); // still on create
    });

    it("should redirect back to homepage after clicking Back to All Polls", () => {
      cy.visit("http://localhost:3000");
      
      cy.contains("Which framework is best?")
        .parent()
        .contains("Vote")
        .click();
    
      cy.contains("React").click(); // vote
    
      // Wait for redirect to results page, then check button
      cy.url().should("include", "/results/");
      cy.contains("Back to All Polls").click();
    
      cy.url().should("eq", "http://localhost:3000/");
    });
    
    it("should delete a poll and remove it from the list", () => {
      cy.visit("http://localhost:3000");
    
      // Create a new poll to delete
      cy.contains("Create New Poll").click();
      cy.get('input[name="question"]').type("Temp poll for deletion");
      cy.get('input[name="option1"]').type("A");
      cy.get('input[name="option2"]').type("B");
      cy.get('input[name="option3"]').type("C");
      cy.get('input[name="option4"]').type("D");
      cy.contains("Create Poll").click();
    
      // Confirm it exists
      cy.contains("Temp poll for deletion").should("exist");
    
      // Click the Delete button (handle confirmation)
      cy.contains("Temp poll for deletion")
        .parent()
        .find("button.btn-outline-danger")
        .click();
    
      cy.on("window:confirm", () => true); // Automatically confirm deletion
    
      // Confirm it's gone
      cy.contains("Temp poll for deletion").should("not.exist");
    });
    

  });
});
