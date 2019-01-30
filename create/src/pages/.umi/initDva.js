import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'nav', ...(require('D:/projectMy/zqf_wangyi_music/create/src/models/nav.js').default) });
app.model({ namespace: 'index', ...(require('D:/projectMy/zqf_wangyi_music/create/src/pages/Home/models/index.js').default) });
app.model({ namespace: 'toplist', ...(require('D:/projectMy/zqf_wangyi_music/create/src/pages/Home/models/toplist.js').default) });
