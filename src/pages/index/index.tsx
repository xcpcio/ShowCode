import React from 'react';
import style from './index.less';
import { Tabs } from 'antd';
import { CodeEditor, DiffEditor } from '@/components/Editor';
const { TabPane } = Tabs;

class Index extends React.Component {
    getTab(tab: string | undefined) {
        if (['code', 'diff'].indexOf(tab || '') !== -1) {
            return tab;
        }
        return 'code';
    }

    constructor(props: any) {
        super(props);
    }

    update(props: any) {
        this.setState({
            tab: props.location.hash.substring(1),
        });
    }

    componentWillMount() {
        this.update(this.props);
    }

    componentDidMount() {}

    componentWillReceiveProps(nextProps: any) {
        this.update(nextProps);
    }

    onTabsChange(activeKey: string) {
        this.setState({
            tab: activeKey,
        });
        location.hash = `#${activeKey}`;
    }

    render() {
        return (
            <div className={style.root}>
                <Tabs
                    activeKey={this.getTab(this.state.tab)}
                    onChange={this.onTabsChange.bind(this)}
                >
                    <TabPane tab="代码编辑" key="code">
                        <CodeEditor />
                    </TabPane>
                    <TabPane tab="代码对比" key="diff">
                        <DiffEditor />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Index;
