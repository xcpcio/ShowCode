import React from 'react';
import style from './index.less';
import { CodeEditor } from '@/components/Editor';
import { fetchCode } from '@/utils';
import { Spin, Alert } from 'antd';

class Index extends React.Component {
    constructor(props: any) {
        super(props);
    }

    async update(props: any) {
        const valueUrl = props.location?.query?.valueUrl || null;
        if (!valueUrl) {
            return;
        }
        const ext = valueUrl.substring(valueUrl.lastIndexOf('.') + 1);
        const value = await fetchCode(valueUrl);
        if (value?.status) {
            return;
        }
        this.setState({
            loading: true,
            value: value,
            language: ext,
        });
    }

    async componentWillMount() {
        this.update(this.props);
    }

    componentDidMount() {}

    componentWillReceiveProps(nextProps: any) {
        this.setState({
            loading: false,
        });
        this.update(nextProps);
    }

    state = {
        value: '',
        language: '',
        loading: false,
    };

    render() {
        return (
            <div className={style.root}>
                {this.state.loading === false && (
                    <div className={style.loading}>
                        <Spin tip="代码加载中..."></Spin>
                    </div>
                )}

                {this.state.loading === true && (
                    <div style={{ marginTop: '30px' }}>
                        <CodeEditor
                            value={this.state.value}
                            language={this.state.language}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Index;
