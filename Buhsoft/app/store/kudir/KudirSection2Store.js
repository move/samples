Ext.define('Buh.store.kudir.KudirSection2Store', {
    extend: 'Ext.data.Store',
    model: 'Buh.model.kudir.KudirSection2Model',
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            root: 'data',
        },
        api: {
            read: dir_start_buh_ + 'kudir_process.php'
        },
    }
});
