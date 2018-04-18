import * as React from 'react';
import './App.css';
import { HeaderBar } from './widgets/components/header-bar/header-bar';
import { AboutMe } from './widgets/components/about-me/about-me';
import { WorkExp } from './widgets/components/work-exp/work-exp';
import { Projects } from './widgets/components/projects/projects';
import { Hobbies } from './widgets/components/hobbies/hobbies';
import { ContactInfo } from './widgets/components/contact-info/contact-info';
import { AboutSite } from './widgets/components/about-site/about-site';
import { Footer } from './widgets/components/footer/footer';
import { SideBar } from './widgets/components/side-bar/side-bar';
import { MenuOptionsEnum } from './widgets/models/menu-options-enum';
import { Dispatch, bindActionCreators, RootState, returnType } from './utils/redux/index';
import { setCurrMenuOption, getCurrMenuOption, shouldShowSideBar, setSideBarVisibility } from './states/app/index';
import createStore, { Store } from './createStore';
import { Provider, connect } from 'react-redux';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

function mapDispatchToProps<AppDispatchProps>(dispatch: Dispatch) {
  return bindActionCreators({
    setCurrMenuOption,
    setSideBarVisibility
  }, dispatch);
}

function mapStateToProps<AppStateProps>(state: RootState) {
  return {
    currMenuOption: getCurrMenuOption(state),
    showSideBar: shouldShowSideBar(state)
  };
}

interface AppOwnProps {

}

const dispatchGeneric = returnType(mapDispatchToProps);
const stateGeneric = returnType(mapStateToProps);

type _AppDispatchProps = typeof dispatchGeneric;
type _AppStateProps = typeof stateGeneric;
type AppProps = _AppStateProps & _AppDispatchProps & AppOwnProps;

class App extends React.Component<AppProps, {}> {
  menuOptions: MenuOptionsEnum[] = [
    MenuOptionsEnum.AboutMe,
    MenuOptionsEnum.WorkExp,
    MenuOptionsEnum.Projects,
    MenuOptionsEnum.Hobbies,
    MenuOptionsEnum.ContactInfo,
    MenuOptionsEnum.AboutSite
  ];

  constructor(props: AppProps) {
    super(props);
  }

  onMenuOptionClicked(menuOptionsEnum: MenuOptionsEnum) {
    this.props.setCurrMenuOption(menuOptionsEnum);
  }

  onShowSideBar(_showSideBar: boolean) {
    this.props.setSideBarVisibility(_showSideBar);
  }

  showCorrectContent(menuOptionsEnum: MenuOptionsEnum) {
    switch (menuOptionsEnum) {
      case MenuOptionsEnum.AboutSite:
        return (<AboutSite />);
      
      case MenuOptionsEnum.ContactInfo:
        return (<ContactInfo />);

      case MenuOptionsEnum.Hobbies:
        return (<Hobbies />);

      case MenuOptionsEnum.Projects:
        return (<Projects />);

      case MenuOptionsEnum.WorkExp:
        return (<WorkExp />);

      default:
      case MenuOptionsEnum.AboutMe:
        return (<AboutMe />);
    }
  }
  render() {
    // don't apply styles because here is always rendered first
    // note that header isn't stickied
    // note that style can't be applied to react component, so wrap them inside div and then apply
    return (
      <div className="app-style">
        <div>
          <HeaderBar
            shouldShowSideBar={(_showSideBar) => this.onShowSideBar(_showSideBar)}
            showSideBar={this.props.showSideBar}
          />
        </div>

        <div className="content">
          <div className="navigation">
              <SideBar
                currSelectedMenuOption={this.props.currMenuOption}
                menuOptionClicked={(currSelectedMenuOption) => this.onMenuOptionClicked(currSelectedMenuOption)}
                menuOptions={this.menuOptions}
                isVisible={this.props.showSideBar}
              />
          </div>

          <div className="section">
            {this.showCorrectContent(this.props.currMenuOption)}
          </div>
        </div>
        
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect<_AppStateProps, _AppDispatchProps>(mapStateToProps, mapDispatchToProps)(App);