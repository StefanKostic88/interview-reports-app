import {MainContainer, AdministrativePanelList} from '../../components'


const AdministrativePanel = () => {

  return <MainContainer>
  <section class="container section" id="home">
  <div class="home">
    <form action="" class="search__form" id="contact-form">
      <div class="search__form-div">
        <label class="search__form-tag">Search</label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Search..."
          class="search__form-input"
          id="contact-name"
        />
      </div>
    </form>
  </div>
</section>
<section class="section container" id="operation">
        <div class="operations">
          <div class="operations__tab-container">
            <button
              class="btn-alt operations__tab operations__tab--1 operations__tab--active"
              data-tab="1"
            >
              <span>01</span>Select Candidate
            </button>
            <button
              class="btn-alt operations__tab operations__tab--2"
              data-tab="2"
            >
              <span>02</span>Select Company
            </button>
            <button
              class="btn-alt operations__tab operations__tab--3"
              data-tab="3"
            >
              <span>03</span>Fill Report Details
            </button>
          </div>
          {/* <!-- CONTENT 1 --> */}
          <div
            class="operations__content operations__content--1 operations__content--active"
          >
            <div class="operations__search">
              <form action="" class="search__form" id="contact-form">
                <div class="search__form-div">
                  <label class="search__form-tag">Search</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Search..."
                    class="search__form-input"
                    id="contact-name"
                  />
                </div>
              </form>
            </div>
            <div class="operations__card-list">
              <div class="operations__card">
                <div class="operations__card-border">
                  <div class="operations__card-perfil">
                    <img
                      src="./assets/img/perfil.png"
                      alt="Card Image"
                      class="operations__card-img"
                    />
                  </div>
                </div>
                <div class="operations__card-info">
                  <h3 class="operations__card-name">Brian Johnston</h3>
                  <span class="operations__card-email"
                    >brian.johnston@gmail.com</span
                  >
                </div>
              </div>
              <div class="operations__card">
                <div class="operations__card-border">
                  <div class="operations__card-perfil">
                    <img
                      src="./assets/img/perfil.png"
                      alt="Card Image"
                      class="operations__card-img"
                    />
                  </div>
                </div>
                <div class="operations__card-info">
                  <h3 class="operations__card-name">Brian Johnston</h3>
                  <span class="operations__card-email"
                    >brian.johnston@gmail.com</span
                  >
                </div>
              </div>
              <div class="operations__card">
                <div class="operations__card-border">
                  <div class="operations__card-perfil">
                    <img
                      src="./assets/img/perfil.png"
                      alt="Card Image"
                      class="operations__card-img"
                    />
                  </div>
                </div>
                <div class="operations__card-info">
                  <h3 class="operations__card-name">Brian Johnston</h3>
                  <span class="operations__card-email"
                    >brian.johnston@gmail.com</span
                  >
                </div>
              </div>
              <div class="operations__card">
                <div class="operations__card-border">
                  <div class="operations__card-perfil">
                    <img
                      src="./assets/img/perfil.png"
                      alt="Card Image"
                      class="operations__card-img"
                    />
                  </div>
                </div>
                <div class="operations__card-info">
                  <h3 class="operations__card-name">Brian Johnston</h3>
                  <span class="operations__card-email"
                    >brian.johnston@gmail.com</span
                  >
                </div>
              </div>
              <div class="operations__card">
                <div class="operations__card-border">
                  <div class="operations__card-perfil">
                    <img
                      src="./assets/img/perfil.png"
                      alt="Card Image"
                      class="operations__card-img"
                    />
                  </div>
                </div>
                <div class="operations__card-info">
                  <h3 class="operations__card-name">Brian Johnston</h3>
                  <span class="operations__card-email"
                    >brian.johnston@gmail.com</span
                  >
                </div>
              </div>

              <div class="operations__card">
                <div class="operations__card-border">
                  <div class="operations__card-perfil">
                    <img
                      src="./assets/img/perfil.png"
                      alt="Card Image"
                      class="operations__card-img"
                    />
                  </div>
                </div>
                <div class="operations__card-info">
                  <h3 class="operations__card-name">Brian Johnston</h3>
                  <span class="operations__card-email"
                    >brian.johnston@gmail.com</span
                  >
                </div>
              </div>
            </div>
          </div>
          {/* <!-- CONTENT 2 --> */}
          <div class="operations__content operations__content--2">
            <div class="operations__select operations__select-search">
              <div class="operations__card-info">
                <p>Candidate:</p>
                <h3>John Doe</h3>
              </div>
              <form action="" class="search__form" id="contact-form">
                <div class="search__form-div">
                  <label class="search__form-tag">Search</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Search..."
                    class="search__form-input"
                    id="contact-name"
                  />
                </div>
              </form>
            </div>
            <div class="operations__card-list operations__select-company">
              <div class="operations__select-company-item">Company 1</div>
              <div class="operations__select-company-item">Company 2</div>
              <div class="operations__select-company-item">Company 3</div>
              <div class="operations__select-company-item">Company 4</div>
              <div class="operations__select-company-item">Company 5</div>
              <div class="operations__select-company-item">Company 6</div>
            </div>
          </div>
          {/* <!-- CONTENT 3 --> */}
          <div class="operations__content operations__content--3">
            <div
              class="operations__select operations__select-search section__border"
            >
              <div class="operations__card-info">
                <p>Candidate:</p>
                <h3>John Doe</h3>
              </div>
              <div class="operations__card-info">
                <p>Company:</p>
                <h3>Company 3</h3>
              </div>
              <form action="" class="search__form" id="contact-form">
                <div class="search__form-div">
                  <label class="search__form-tag">Search</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Search..."
                    class="search__form-input"
                    id="contact-name"
                  />
                </div>
              </form>
            </div>
            <div class="operations__form-fill">
              <form action="" id="contact-form">
                <div class="operations__form">
                  <div class="operations__form-div">
                    <label for="date" class="search__form-tag"
                      >Interview Date:</label
                    >
                    <input
                      type="date"
                      name="date"
                      required
                      class="search__form-input"
                      id="date"
                    />
                  </div>
                  <div class="operations__form-div">
                    <label for="tehnical" class="search__form-tag"
                      >Phase:</label
                    >
                    <select id="tehnical" name="tehnical">
                      <option value="tech-2">Tehnical</option>
                      <option value="tech-2">Tech 2</option>
                      <option value="tech-3">Tech 3</option>
                    </select>
                  </div>
                  <div class="operations__form-div">
                    <label for="select" class="search__form-tag">Select:</label>
                    <select id="select" name="select">
                      <option value="passed">Passed</option>
                      <option value="declined">Declined</option>
                    </select>
                  </div>
                </div>
                <div class="operations__form">
                  <div class="operations__form-div">
                    <textarea name="message" rows="10" cols="30">
The cat was playing in the garden.</textarea
                    >
                  </div>
                </div>
                <div class="operations__form">
                  <button class="btn-alt">BACK</button>
                  <button class="btn">SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


</MainContainer>;
};

export default AdministrativePanel;
