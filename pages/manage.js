import {Button,Card,Form,Layout,Page,} from '@shopify/polaris';
import styles from '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../assets/images/logo.png';
import { IconContext } from "react-icons";
  
  class Manage extends React.Component {
    state = {
      discount: '10%',
      enabled: false,
    };
    
  
    render() {
        const { discount, enabled } = this.state;
        const contentStatus = enabled ? 'Disable' : 'Enable';
        const textStatus = enabled ? 'enabled' : 'disabled';
  
      return (
        <section className="m-0 newcass">
          <div className="top-header mb-0">
            <div className="left-area">
            <img src={'../assets/images/logo.png'} alt="logo" /> <label>Aero / </label> <h5>Manage</h5>
            </div>
          </div>
          <div className="top-header new-headline">
            <div className="left-area">
              <Button submit>Learn More</Button>
            </div>
            <div className="right-area">
              <Button submit>Settings</Button>
              <Button primary submit>Dashboard</Button>
            </div>
          </div>

          <section className="container">
            
          <div className="stylish-area">
            <h5>Add a link</h5>
            <p>Below you can select the links that will appear when the button widget is clicked in your store. You can choose to link the product, collections, pages, blogs. blog posts and custom URLs.</p>
          </div>

          <Card sectioned>
            <Form>
              <div className="form-row">
                <div className="form-group col-lg-3 col-md-3">
                  <label >Title</label>
                  <input type="text" className="form-control" id="" placeholder="e.g - Sales Items" />
                </div>
                <div className="form-group col-lg-3 col-md-3">
                  <label>Link Type</label>
                  <select id="inputState" className="form-control">
                    <option selected="">Product</option>
                    <option>Items</option>
                    <option>Product</option>
                  </select>
                </div>
                <div className="form-group col-lg-6 col-md-6">
                  <label for="exampleFormControlFile1">Link</label>
                  <div className="search-products">
                    <input type="text" className="newinput" id="" placeholder="Search Products"/>
                    <button>Browse</button>
                    <input type="file" className="form-control-file" id="" placeholder="Search Products"/>
                  </div>
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="form-group col-lg-2 col-md-3">
                  <label >Button Color</label>
                  <div className="colo-picker">
                    <span className="color-circle"></span>
                    <label>#5C6AC4</label>
                    <span className="hexa-value">hex</span>
                  </div>
                </div>
                <div className="form-group col-lg-2 col-md-3">
                  <label>Select Icon</label>
                  <select id="inputState" className="form-control">
                    <option selected="">fas fa-trophy</option>
                    <option>Items</option>
                    <option>Product</option>
                  </select>
                </div>
                <div className="form-group col-lg-2 col-md-3">
                  <label >Icon Color</label>
                  <div className="colo-picker">
                    <span className="color-circle"></span>
                    <label>#5C6AC4</label>
                    <span className="hexa-value">hex</span>
                  </div>
                </div>
                
                <div className="form-group col-lg-6 col-md-3 text-right button-bottom">
                  <button type="submit" className="Polaris-Button Polaris-Button--primary">
                    <span className="Polaris-Button__Content"><span className="Polaris-Button__Text">Add Link</span></span>
                  </button>
                </div>

              </div>
            </Form>
          </Card>

          <hr className="middle-line" />

          <Card sectioned>
            <Form>
              <div className="stylish-area border-bottom-0">
                <div className="floating-left">
                  <h5>Floating Add to Cart</h5>
                  <p>Enable the powerful floating Add to Cart.</p>
                  <p>This appears on Product Pages.</p>
                </div>
                <div className="floating-right">
                  <label className="pro">Requires the <i>Pro</i> plan.</label>
                  <button type="submit" className="Polaris-Button Polaris-Button--primary">
                    <span className="Polaris-Button__Content"><span className="Polaris-Button__Text">Enable</span></span>
                  </button>
                </div>
              </div>
            </Form>
          </Card>

          <hr className="middle-line" />

          <div className="w-100 manage-links">
            <h5 className="header-tittle mb-3">Manage Links</h5>
            <Card sectioned>
              <Form>
                <div className="stylish-area border-bottom-0">
                  <div className="repeating-structure">
                    <div className="link-type">
                      <span className="blue-circle mr-5"></span>
                      <span className="link-span mr-5">Link Type</span> 
                      <label>Link Name</label>
                    </div>
                    <div className="short-type">
                        <button className="buttons enable mr-5">Enabled</button>
                        <div className="increment-wrapper mr-5">
                          <label className="mb-0 mr-3">Sort</label>
                          <div className="arrow-up-down">
                            <div className="arrow up"></div>
                            <div className="arrow down"></div>
                          </div>
                        </div>
                        <div className="action">
                          <button className="btn button dropdown-toggle">Actions</button>
                        </div>
                    </div>
                  </div> 

                  <div className="repeating-structure">
                    <div className="link-type">
                      <span className="blue-circle mr-5"></span>
                      <span className="link-span mr-5">Link Type</span> 
                      <label>Link Name</label>
                    </div>
                    <div className="short-type">
                        <button className="buttons enable mr-5">Enabled</button>
                        <div className="increment-wrapper mr-5">
                          <label className="mb-0 mr-3">Sort</label>
                          <div className="arrow-up-down">
                            <div className="arrow up"></div>
                            <div className="arrow down"></div>
                          </div>
                        </div>
                        <div className="action">
                          <button className="btn button dropdown-toggle">Actions</button>
                        </div>
                    </div>
                  </div>

                  <div className="repeating-structure">
                    <div className="link-type">
                      <span className="blue-circle mr-5"></span>
                      <span className="link-span mr-5">Link Type</span> 
                      <label>Link Name</label>
                    </div>
                    <div className="short-type">
                        <button className="buttons enable diable mr-5">Enabled</button>
                        <div className="increment-wrapper mr-5">
                          <label className="mb-0 mr-3">Sort</label>
                          <div className="arrow-up-down">
                            <div className="arrow up"></div>
                            <div className="arrow down"></div>
                          </div>
                        </div>
                        <div className="action">
                          <button className="btn button dropdown-toggle">Actions</button>
                        </div>
                    </div>
                  </div>
                                
                </div>
              </Form>
            </Card>
            <div className="text-right mt-4">
              <button type="submit" className="Polaris-Button Polaris-Button--primary delete-link">
                <span className="Polaris-Button__Content"><span className="Polaris-Button__Text">Delete Link </span></span>
              </button>
            </div>
          </div>

          </section>
        </section>
      );
    }
  
    handleSubmit = () => {
      this.setState({
        discount: this.state.discount,
      });
      console.log('submission', this.state);
    };
  
    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
    };
    
    handleToggle = () => {
        this.setState(({ enabled }) => {
          return { enabled: !enabled };
        });
      };
  }
  
  export default Manage;