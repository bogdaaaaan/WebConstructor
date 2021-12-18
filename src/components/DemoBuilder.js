import { Builder, item, branch } from "build-ui";

const DemoBuilder = ({
    children,
    demo
}) => {
    // Initial Tree Default

    const Demo = demo ? demo : branch(item({
        type: 'Canvas',
        props: {
            style: {
                backgroundColor: '#cecece',
            }
        }
    }))

    return <Builder
        initialTree={Demo}
        initialHistoryLimit={9999}
        initialBatchTime={3000}
        initialBatchTimeLimit={6000}
    >
        {children}
    </Builder>
}

export default DemoBuilder;