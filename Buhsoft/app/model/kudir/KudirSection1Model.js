Ext.define('Buh.model.kudir.KudirSection1Model', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.reader.Json'
    ],
    fields: [
        'order_num',
        'id',
        'id_op',
        'n_doc',
        'n_doc_orig',
        'short_name',
        'short_name_orig',
        'doc_date',
        'date_orig',
        'at_period',
        'at_period_orig',
        'operation',
        'name_contra',
        'prihod',
        'rashod',
        'd_r_',
        'id_sod',
        'id_sod_orig',
        'auto',
        'iskl',
        'is_dirty',
        'summa',
        'summa_orig',
        'id_doc',
        'id_contra',
        'id_contra_orig',
        'tab_id',
        'details',
        'quarter',
        'source',
        'source_id',
        'date',
        'deal_text',
        'tovar_text'
    ]
});
