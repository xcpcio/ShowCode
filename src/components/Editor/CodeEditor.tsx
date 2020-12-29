import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import style from './CodeEditor.less';

class CodeEditor extends React.Component {
    editor: any = null;
    defaultOptions: any = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
        multicursorModifier: 'ctrlCmd',
        cursorWidth: 1,
        lineHeight: 20,
        fontSize: 12,
        fontFamily:
            "'Fira Mono', 'Bitstream Vera Sans Mono', 'Menlo', 'Consolas', 'Lucida Console', 'Source Han Sans SC', 'Noto Sans CJK SC', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', monospace",
        lineNumbersMinChars: 4,
        glyphMargin: false,
        renderFinalNewline: true,
        scrollbar: {
            useShadows: false,
            verticalScrollbarSize: 0,
            horizontalScrollbarSize: 2,
            vertical: 'hidden',
        },
        overviewRulerBorder: false,
        hideCursorInOverviewRuler: true,
        contextmenu: false,
        enableSplitViewResizing: false,
    };
    defaultState = {
        height: '860',
        language: 'cpp',
        value: '',
        theme: 'vs-light',
        options: this.defaultOptions,
    };

    constructor(props: any) {
        super(props);
    }

    updateState(props: any) {
        this.setState({
            height: props.height || this.defaultState.height,
            language: props.language || this.defaultState.language,
            value: props.value || this.defaultState.value,
            theme: props.theme || this.defaultState.theme,
            options: { ...this.defaultOptions, ...props.options },
        });
    }

    componentWillMount() {
        this.updateState(this.props);
    }

    onChange = (newValue: string) => {};

    editorDidMount = (editor: any) => {
        this.editor = editor;
    };

    changeEditorValue = () => {};

    changeBySetState = () => {};

    state = {
        height: this.defaultState.height,
        language: this.defaultState.language,
        value: this.defaultState.value,
        theme: this.defaultState.theme,
        options: this.defaultOptions,
    };

    render() {
        return (
            <div className={style['code-editor']}>
                <MonacoEditor
                    width={'100%'}
                    height={this.state.height}
                    language={this.state.language}
                    value={this.state.value}
                    options={this.state.options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                    theme={this.state.theme}
                />
            </div>
        );
    }
}

export { CodeEditor };
