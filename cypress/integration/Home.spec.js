/// <reference types="cypress" />

context("Home", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(2000);
  });

  it("Should display a message saying 'Search for a repo! You need to enter an username and a repo name, if the repo is found, its issues will appear here!' if the username input and repository input is blank and there are no query params", () => {
    expect(cy.location().search).to.eq(undefined);
    cy.get("#search-repo-message").should(
      "contain",
      "Search for a repo! You need to enter an username and a repo name, if the repo is found, its issues will appear here!"
    );
  });

  it("Should display a message saying 'You need to enter an username, if the repo is found, its issues will appear here!' if the username param is missing", () => {
    cy.visit("http://localhost:3000/?username=&repository=react");
    cy.location().should((location) => {
      expect(location.search).to.eq("?username=&repository=react");
    });
    cy.get("#search-repo-message").should(
      "contain",
      "You need to enter an username, if the repo is found, its issues will appear here!"
    );
  });

  it("Should display a message saying 'You need to enter a repo name, if the repo is found, its issues will appear here!' if the username param is missing", () => {
    cy.visit("http://localhost:3000/?username=facebook&repository=");
    cy.location().should((location) => {
      expect(location.search).to.eq("?username=facebook&repository=");
    });
    cy.get("#search-repo-message").should(
      "contain",
      "You need to enter a repo name, if the repo is found, its issues will appear here!"
    );
  });

  it("Should display a message for a repo not found if the repo is not found", () => {
    cy.visit("http://localhost:3000/?username=alvarojsnish&repository=react");
    cy.location().should((location) => {
      expect(location.search).to.eq("?username=alvarojsnish&repository=react");
    });
    cy.get("#search-repo-message").should(
      "contain",
      "The repo alvarojsnish/react was not found!"
    );
  });

  it("Should navigate to 'http://localhost:3000/?username=facebook&repository=react' if we type 'facebook' on the username input and 'facebook' on the repository input and submit the form and display a list of 10 issues", () => {
    cy.get("#username-input").type("facebook");
    cy.get("#repository-input").type("react");
    cy.get("#search-repo-button").click();
    cy.location().should((location) => {
      expect(location.search).to.eq("?username=facebook&repository=react");
    });
    cy.get("li#issue-item").should("have.length", 10);
  });

  it("Should navigate to the second page if we click the button next, and come back to the first page if we click previous page", () => {
    cy.get("#username-input").type("facebook");
    cy.get("#repository-input").type("react");
    cy.get("#search-repo-button").click();
    cy.location().should((location) => {
      expect(location.search).to.eq("?username=facebook&repository=react");
    });
    cy.get("li#issue-item").should("have.length", 10);
    cy.get("#next-page-button").click();
    cy.location().should((location) => {
      expect(location.search).to.eq(
        "?username=facebook&repository=react&page=2"
      );
    });
    cy.get("li#issue-item").should("have.length", 10);
    cy.get("#previous-page-button").click();
    cy.location().should((location) => {
      expect(location.search).to.eq(
        "?username=facebook&repository=react&page=1"
      );
    });
    cy.get("li#issue-item").should("have.length", 10);
  });

  it("Should display a modal for the issue selected, with the title, type of the issue, body and list of comments, if it has any", () => {
    cy.get("#username-input").type("facebook");
    cy.get("#repository-input").type("react");
    cy.get("#search-repo-button").click();
    cy.location().should((location) => {
      expect(location.search).to.eq("?username=facebook&repository=react");
    });
    cy.get("li#issue-item").should("have.length", 10);
    cy.get("li#issue-item").first().click();

    cy.get("#issue-modal").should("be.visible");
    cy.get("#issue-title").should("exist");
    cy.get("#issue-type")
      .invoke("text")
      .then((text) => {
        if (text === "issue") {
          expect(text).to.eq("issue");
        }

        if (text === "pull request") {
          expect(text).to.eq("pull request");
        }
      });

    cy.get("#issue-body").should("exist");
  });
});
