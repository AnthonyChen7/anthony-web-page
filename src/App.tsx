import * as React from 'react';
import './App.css';
import { HeaderBar } from './widgets/components/header-bar/header-bar';
import { AboutMe } from './widgets/components/about-me/about-me';
import { Footer } from './widgets/components/footer/footer';
import { SideBar } from './widgets/components/side-bar/side-bar';
import { MenuOptionsEnum } from './widgets/models/menu-options-enum';
import { Dispatch, bindActionCreators, RootState, returnType } from './utils/redux/index';
import { setCurrMenuOption, getCurrMenuOption } from './states/app/index';
import createStore, { Store } from './createStore';
import { Provider, connect } from 'react-redux';

function mapDispatchToProps<AppDispatchProps>(dispatch: Dispatch) {
  return bindActionCreators({
    setCurrMenuOption
  }, dispatch);
}

function mapStateToProps<AppStateProps>(state: RootState) {
  return {
    currMenuOption: getCurrMenuOption(state)
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

  showCorrectContent(menuOptionsEnum: MenuOptionsEnum) {
    switch (menuOptionsEnum) {
      case MenuOptionsEnum.AboutSite:
        return (<div>AboutSite</div>);
      
      case MenuOptionsEnum.ContactInfo:
        return (<div>ContactInfo</div>);

      case MenuOptionsEnum.Hobbies:
        return (<div>Hobbies</div>);

      case MenuOptionsEnum.Projects:
        return (<div>Projects</div>);

      case MenuOptionsEnum.WorkExp:
        return (<div>WorkExp</div>);

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
          <HeaderBar />
        </div>

        <div className="content">
          <div className="navigation">
            <SideBar 
              menuOptionClicked={(currSelectedMenuOption) => this.onMenuOptionClicked(currSelectedMenuOption)}
              menuOptions={this.menuOptions}
            />
          </div>

          <div className="section">
            {/* <AboutMe /> */}
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