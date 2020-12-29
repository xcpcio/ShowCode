import React from 'react';
import style from './index.less';
import { DiffEditor } from '@/components/Editor';
import { fetchCode } from '@/utils';
import { Spin } from 'antd';

class Index extends React.Component {
    constructor(props: any) {
        super(props);
    }

    async update(props: any) {
        const originalUrl = props.location?.query?.originalUrl || null;
        const valueUrl = props.location?.query?.valueUrl || null;
        if (!originalUrl || valueUrl) {
            return;
        }
        const ext = originalUrl.substring(originalUrl.lastIndexOf('.') + 1);
        const originalCode = await fetchCode(originalUrl);
        const valueCode = await fetchCode(valueUrl);
        if (originalCode?.status || valueCode?.status) {
            return;
        }
        this.setState({
            loading: true,
            originalCode: originalCode,
            valueCode: valueCode,
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
        originalCode: '',
        valueCode: '',
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
                        <DiffEditor
                            original={this.state.originalCode}
                            value={this.state.valueCode}
                            language={this.state.language}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Index;
