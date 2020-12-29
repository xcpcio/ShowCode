import React from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';
import style from './DiffEditor.less';

class DiffEditor extends React.Component {
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
        originalEditable: true,
        renderSideBySide: true,
    };
    defaultState = {
        height: '860',
        language: 'cpp',
        value: '',
        original: '',
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
            original: props.original || this.defaultState.original,
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
        original: this.defaultState.original,
        options: this.defaultOptions,
    };

    render() {
        return (
            <div className={style['diff-editor']}>
                <MonacoDiffEditor
                    width={'100%'}
                    height={this.state.height}
                    language={this.state.language}
                    value={this.state.value}
                    original={this.state.original}
                    theme={this.state.theme}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                    options={this.state.options}
                />
            </div>
        );
    }
}

export { DiffEditor };
