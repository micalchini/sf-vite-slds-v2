import "./App.css";

function App() {
  return (
    <div className="slds-scope react-app-container">
      {/* Main Content */}
      <div className="slds-container_fluid slds-p-around_medium">
        <div className="slds-page-header">
          <div className="slds-page-header__row">
            <div className="slds-page-header__col-title">
              <div className="slds-media">
                <div className="slds-media__body">
                  <div className="slds-page-header__name">
                    <h1>
                      <span className="slds-page-header__title slds-truncate">
                        Welcome to Lightning Design System
                      </span>
                    </h1>
                  </div>
                  <p className="slds-page-header__name-meta">
                    A complete Salesforce Lightning Design System starter template
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Content Grid */}
        <div className="slds-grid slds-gutters slds-wrap slds-m-top_large">
          <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3">
            <div className="slds-card">
              <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                  <div className="slds-media__body">
                    <h2 className="slds-card__header-title">
                      <span>Components</span>
                    </h2>
                  </div>
                </header>
              </div>
              <div className="slds-card__body slds-card__body_inner">
                <p>Lightning Design System provides a comprehensive set of UI components that follow Salesforce's design principles.</p>
              </div>
            </div>
          </div>
          
          <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3">
            <div className="slds-card">
              <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                  <div className="slds-media__body">
                    <h2 className="slds-card__header-title">
                      <span>Responsive</span>
                    </h2>
                  </div>
                </header>
              </div>
              <div className="slds-card__body slds-card__body_inner">
                <p>Built-in responsive grid system that adapts to different screen sizes and devices seamlessly.</p>
              </div>
            </div>
          </div>
          
          <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-1 slds-large-size_1-of-3">
            <div className="slds-card">
              <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                  <div className="slds-media__body">
                    <h2 className="slds-card__header-title">
                      <span>Accessibility</span>
                    </h2>
                  </div>
                </header>
              </div>
              <div className="slds-card__body slds-card__body_inner">
                <p>All components are built with accessibility in mind, ensuring your applications work for everyone.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Form */}
        <div className="slds-card slds-m-top_large">
          <div className="slds-card__header slds-grid">
            <header className="slds-media slds-media_center slds-has-flexi-truncate">
              <div className="slds-media__body">
                <h2 className="slds-card__header-title">
                  <span>Sample Form</span>
                </h2>
              </div>
            </header>
          </div>
          <div className="slds-card__body slds-card__body_inner">
            <div className="slds-grid slds-gutters">
              <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2">
                <div className="slds-form-element">
                  <label className="slds-form-element__label" htmlFor="first-name">
                    First Name
                  </label>
                  <div className="slds-form-element__control">
                    <input type="text" id="first-name" className="slds-input" placeholder="Enter your first name" />
                  </div>
                </div>
              </div>
              <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2">
                <div className="slds-form-element">
                  <label className="slds-form-element__label" htmlFor="last-name">
                    Last Name
                  </label>
                  <div className="slds-form-element__control">
                    <input type="text" id="last-name" className="slds-input" placeholder="Enter your last name" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-form-element slds-m-top_medium">
              <label className="slds-form-element__label" htmlFor="email">
                Email
              </label>
              <div className="slds-form-element__control">
                <input type="email" id="email" className="slds-input" placeholder="Enter your email" />
              </div>
            </div>
            <div className="slds-m-top_medium">
              <button className="slds-button slds-button_brand">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
