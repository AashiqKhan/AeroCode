import {Button,Card,Form,Layout,Page,} from '@shopify/polaris';
import styles from '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
  
  class AnnotatedLayout extends React.Component {
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
          <div className="top-header">
            <div className="left-area">
            <img src="../assets/images/logo.png" alt="logo" /> <label>Aero / </label> <h5>Settings</h5>
            </div>
            <div className="right-area">
            <Button submit>Settings</Button>
            <Button primary submit>Save</Button>
            </div>
          </div>

          <section className="container">

          <Layout className="polories-layout">

            <Layout.AnnotatedSection
              title="Global Settings"
              description="Manage how Aero will appear across your stire."
            >
              <Card sectioned>
                <Form>
                  <div className="form-style margin0">
                    <label className="margin0 bold-text">Global State. Aero is currently deactived across your store.</label>
                    <Button primary submit>Enable</Button>
                  </div>
                </Form>
              </Card>
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection
              title="Global Display Settings"
              description="Customize the postion and style of Aero in relation to your store"

            >
              <Card sectioned>
                <Form>
                  <div className="form-style margin0 d-block">
                    <label className="margin0 bold-text d-block mb-3">Floating Widget</label>
                    <div className="Widget-covers">
                      <div className="form-row">
                        <div className="form-group col-lg-3 col-md-6">
                          <label>Postion</label>
                          <div className="w-100 relative">
                            <input className="w-100 " placeholder="Bootom Right" />
                            <div className="arrow-up-down">
                              <div className="arrow up"></div>
                              <div className="arrow down"></div>
                          </div>
                          </div>
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                          <label >Button Color</label>
                          <div className="colo-picker">
                            <span className="color-circle"></span>
                            <label>#5C6AC4</label>
                            <span className="hexa-value">hex</span>
                          </div>
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                          <label>Select Icon</label>
                          <select id="inputState" className="form-control">
                            <option selected="">fas fa-trophy</option>
                            <option>Items</option>
                            <option>Product</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                          <label >Icon Color</label>
                          <div className="colo-picker">
                            <span className="color-circle"></span>
                            <label>#5C6AC4</label>
                            <span className="hexa-value">hex</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-row mt-4">
                        <div className="form-group col-lg-3 col-md-6">
                          <label>Margin Top</label>
                          <div className="w-100 relative">
                            <input className="w-100 " placeholder="10" />
                            <div className="arrow-up-down">
                              <div className="arrow up"></div>
                              <div className="arrow down"></div>
                          </div>
                          </div>
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                          <label>Margin Bottom</label>
                          <div className="w-100 relative">
                            <input className="w-100 " placeholder="10" />
                            <div className="arrow-up-down">
                              <div className="arrow up"></div>
                              <div className="arrow down"></div>
                          </div>
                          </div>
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                          <label>Margin Left</label>
                          <div className="w-100 relative">
                            <input className="w-100 " placeholder="10" />
                            <div className="arrow-up-down">
                              <div className="arrow up"></div>
                              <div className="arrow down"></div>
                          </div>
                          </div>
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                          <label>Margin Right</label>
                          <div className="w-100 relative">
                            <input className="w-100 " placeholder="10" />
                            <div className="arrow-up-down">
                              <div className="arrow up"></div>
                              <div className="arrow down"></div>
                          </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="my-3">Labels</h5>
                      <div className="form-row">
                        <div className="form-group col-lg-3 col-md-6">
                          <label >Font Color</label>
                          <div className="colo-picker">
                            <span className="color-circle"></span>
                            <label>#5C6AC4</label>
                            <span className="hexa-value">hex</span>
                          </div>
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                          <label >Background Color</label>
                          <div className="colo-picker">
                            <span className="color-circle"></span>
                            <label>#5C6AC4</label>
                            <span className="hexa-value">hex</span>
                          </div>
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                          <div className="form-group form-check relative-chekbox">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Hide Labeles?</label>
                          </div>
                        </div>
                        <div className="form-group col-lg-12 col-md-12">
                          <label  className="d-block">Custom Css</label>
                          <textarea className="text-area">

                          </textarea>
                        </div>
                      </div>
                    </div>
                </div>
              </Form>
            </Card>
          </Layout.AnnotatedSection>

          <hr className="middle-line" />

          <Layout.AnnotatedSection
              title="Integrations"
              description="Manage itegrations for Aero."
            >
              <Card sectioned>
                <Form>
                  <div className="form-style margin0">
                    <div className="img-name">
                      {/* <img src="../assets/messanger.png" className="mr-5" /> */}
                      <div className="img-replacer mr-5"></div> <label className="mb-0 font-weight-500">Facebook messanger</label>
                    </div>
                    <Button submit>Connect</Button>
                  </div>
                </Form>
              </Card>
              <Card sectioned>
                <Form>
                  <div className="form-style margin0">
                    <div className="img-name">
                      {/* <img src="../assets/messanger.png" className="mr-5" /> */}
                      <div className="img-replacer mr-5"></div> <label className="mb-0 font-weight-500">Slack</label>
                    </div>
                    <Button submit>Connect</Button>
                  </div>
                </Form>
              </Card>
              <Card sectioned>
                <Form>
                  <div className="form-style margin0">
                    <div className="img-name">
                      {/* <img src="../assets/messanger.png" className="mr-5" /> */}
                      <div className="img-replacer mr-5"></div> <label className="mb-0 font-weight-500">Drift</label>
                    </div>
                    <Button submit>Connect</Button>
                  </div>
                </Form>
              </Card>
            </Layout.AnnotatedSection> 

            <hr className="middle-line" />

            <Layout.AnnotatedSection
              title="Manage Plan"
              description="Manage your current Aero Plan."
            >
            <Card sectioned>
              <Form>
                <div className="form-style margin0">
                  <label className="margin0 bold-text">You are currently subscribe to a Premimum Plan.</label>
                  <Button  submit>Manage</Button>
                </div>
              </Form>
            </Card>
            </Layout.AnnotatedSection>


          </Layout>
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
  
  export default AnnotatedLayout;