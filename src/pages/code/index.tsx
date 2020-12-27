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
        const url = props.location?.query?.url || '';
        const ext = url.substring(url.lastIndexOf('.') + 1);
        const code = await fetchCode(url);
        if (code?.status) {
            return;
        }
        this.setState({
            loading: true,
            code: code,
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
        code: '',
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
                            code={this.state.code}
                            language={this.state.language}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Index;
