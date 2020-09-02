import {Button,Card,Form,Layout,Page,} from '@shopify/polaris';
import styles from '../assets/css/style.css';
// import logo from '../assets/images/logo.png';
  
  class Overview extends React.Component {
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
            <img src={'../assets/images/logo.png'} alt="logo" /> <label>Aero / </label> <h5>Overview</h5>
            </div>
            <div className="right-area">
            <Button submit>Learn More</Button>
            <Button submit>Settings</Button>
            <Button primary submit>Manage buttons</Button>
            </div>
          </div>

          <section className="container">

          <div className="dflex stylish-area">
          <img src={'../assets/images/logo.png'} alt="logo" />
            <div className="heading-para">
                <h5>Welcome to Aero.</h5>
                <p>With Aero you can improve your store's navigation and shopping experience. Aero can get your customers to the right places quicker and alleviate soem of the pain when nevigating. You can create link tp important pages, promotes specific products/collections and much more.</p>
            </div>
          </div>

          <Layout className="polories-layout">

            <Layout.AnnotatedSection
              title="Manage"
              description="Craete and Manage button links."
            >
              <Card sectioned>
                <Form>
                  <div className="form-style margin0">
                    <label className="margin0 bold-text">Craete and Manage button links for your store.</label>
                    <Button primary submit>Manage</Button>
                  </div>
                </Form>
              </Card>
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection
              title="Settings"
              description="Aero settings"
            >
              <Card sectioned>
                <Form>
                  <div className="form-style margin0">
                    <label className="margin0 bold-text">Control Aero's appearance and global settings inculding visibility.</label>
                    <Button submit>Settings</Button>
                  </div>
                </Form>
              </Card>
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection
              title="Installation "
              description="Check current theme for Aero."
            >
              <Card sectioned>
                <Form>
                  <div className="form-style margin0">
                    <label className="margin0 bold-text">Just switched theme or experiencing issues with Aero? Click teh sync button to check and reinstall</label>
                    <Button submit>Sync</Button>
                  </div>
                </Form>
              </Card>
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection
              title="Knowledge Base "
              description="View support documents"
            >
              <Card sectioned>
                <Form>
                  <div className="form-style margin0">
                    <label className="margin0 bold-text">want to learn more about Aero and how it works? Visit the Knowledge Base.</label>
                    <Button submit>View</Button>
                  </div>
                </Form>
              </Card>
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection
              title="Request Support"
            >
              <Card sectioned>
                <Form>
                  <div className="form-style margin0">
                    <label className="margin0 bold-text">If you still having issues with Aero working with your store and have checked the learn More section, you can request support.</label>
                    <Button submit>Request</Button>
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
  
  export default Overview;