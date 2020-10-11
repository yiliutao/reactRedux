import * as React from "react";
import styled from "styled-components";
import { ReqStruct } from '@static/biz/bizCommon';

//加载redux依赖
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionIds, ActModule } from '@lwRedux/action/actions';
import * as ActionCreator from '@lwRedux/action/creator';

interface PropsStruct {
    className?: any;
    dispatch: (request: ReqStruct) => void,
}
class ModifyPassword extends React.Component<PropsStruct, {}>{
    render() {
        return <div>修改密码</div>;
    }
}
const StylePage = styled(ModifyPassword)``;
const mapStateToProps = (state: any) => {
    return {};
};
const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(ActionCreator, dispatch);
};
const WrappPage = connect(mapStateToProps, mapDispatchToProps)(StylePage);
export default WrappPage;
