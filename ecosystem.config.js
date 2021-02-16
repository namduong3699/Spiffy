const instances = process.env.NODE_INSTANCES ? Number(process.env.NODE_INSTANCES) : 2;

module.exports = {
    apps: [
        {
            name: 'spiffy',
            script: './server/index.js',
            cwd: '/web',
            instances,
            exec_mode: 'cluster',
            node_args: '-r esm',
        },
    ],
};
