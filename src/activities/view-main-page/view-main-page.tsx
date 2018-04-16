// import { Dispatch, bindActionCreators, returnType, RootState } from '../../utils/redux/index';
// import { setCurrMenuOption, getApp } from '../../states/app/index';
// import * as React from 'react';
// import './view-main-page.css';
// import { MenuOptionsEnum } from '../../widgets/models/menu-options-enum';
// import { HeaderBar } from '../../widgets/components/header-bar/header-bar';
// import { SideBar } from '../../widgets/components/side-bar/side-bar';
// import { AboutMe } from '../../widgets/components/about-me/about-me';
// import { Footer } from '../../widgets/components/footer/footer';
// import { connect } from 'react-redux';

// function mapDispatchToProps<MainPageDispatchProps>(dispatch: Dispatch) {
//   return bindActionCreators({
//     setCurrMenuOption
//   }, dispatch);
// }

// function mapStateToProps<FlashMessageStateProps>(state: RootState) {
//   return {
//       app: getApp(state)
//   };
// }

// interface MainPageOwnProps {

// }

// const dispatchGeneric = returnType(mapDispatchToProps);
// const stateGeneric = returnType(mapStateToProps);

// type MainPageDispatchProps = typeof dispatchGeneric;
// type MainPageStateProps = typeof stateGeneric;
// type MainPageProps = MainPageStateProps & MainPageDispatchProps & MainPageOwnProps;

// export class ViewMainPage extends React.Component<MainPageProps, {}> { 
//   menuOptions: MenuOptionsEnum[] = [
//     MenuOptionsEnum.AboutMe,
//     MenuOptionsEnum.WorkExp,
//     MenuOptionsEnum.Projects,
//     MenuOptionsEnum.Hobbies,
//     MenuOptionsEnum.ContactInfo,
//     MenuOptionsEnum.AboutSite
//   ];

//   onMenuOptionClicked(menuOptionsEnum: MenuOptionsEnum) {
//     console.log(menuOptionsEnum);
//   }
//   render() {
//     // don't apply styles because here is always rendered first
//     // note that header isn't stickied
//     // note that style can't be applied to react component, so wrap them inside div and then apply
//     return (
//       <div className="app-style">
//         <div>
//           <HeaderBar />
//         </div>

//         <div className="content">
//           <div className="navigation">
//             <SideBar 
//               menuOptionClicked={(currSelectedMenuOption) => this.onMenuOptionClicked(currSelectedMenuOption)}
//               menuOptions={this.menuOptions}
//             />
//           </div>

//           <div className="section">
//             <AboutMe />
//           </div>
//         </div>

//         <div className="footer">
//           <Footer />
//         </div>
//       </div>
//     );
//   }
// }

// export default connect<MainPageStateProps, MainPageDispatchProps, {}>(null, mapDispatchToProps)(ViewMainPage);