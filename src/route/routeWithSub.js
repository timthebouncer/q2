import {Link} from "react-router-dom";
import React from "react";
import {userIcon, chevronDown} from '@/Icon/svg'
import ToolTip from "@/component/tooltip/tooltip";

function RouteWithSubRoutes({item,index,switchMenu}) {
  return (
    <>
        <ul className="sidebar-items" key={index}>
          <li className="flex mb-2">
            {
              switchMenu===false? <><span className={'mr-4'}>{userIcon}</span> <span>{item.name}</span></>:<>
                <ToolTip text={item.name}>
             <span className={"m-0 h-8"}>
                {userIcon}
              </span>
                </ToolTip>
              </>
            }
            <i className={'mt-1.5'}>{chevronDown}</i>
          </li>
            {item.routes.map((item, i) => {
              return(
                <Link key={i} to={item.path} className={'flex justify-center mb-3'}>
                  {item.name}
                </Link>
              )
            })}
        </ul>


      {/*<SidebarLink to={item.path}*/}
      {/*             onClick={item.subNav && showSubnav}>*/}
      {/*  <div>*/}
      {/*    {item.icon}*/}
      {/*    <SidebarLabel>{item.title}</SidebarLabel>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    {item.subNav && subnav*/}
      {/*      ? item.iconOpened*/}
      {/*      : item.subNav*/}
      {/*        ? item.iconClosed*/}
      {/*        : null}*/}
      {/*  </div>*/}
      {/*</SidebarLink>*/}
      {/*{subnav &&*/}
      {/*item.subNav.map((item, index) => {*/}
      {/*  return (*/}
      {/*    <DropdownLink to={item.path} key={index}>*/}
      {/*      {item.icon}*/}
      {/*      <SidebarLabel>{item.title}</SidebarLabel>*/}
      {/*    </DropdownLink>*/}
      {/*  );*/}
      {/*})}*/}
    </>
  );
}

export default RouteWithSubRoutes