import { Builder, item, branch } from "build-ui";
// import Demo from './builder/templates/demo';
// import Demo from './builder/templates/demo2'

const DemoBuilder = ({
    children,
}) => {
    // Initial Tree Default
    const Demo = branch(item({
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