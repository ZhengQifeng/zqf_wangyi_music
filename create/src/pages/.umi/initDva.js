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

app.model({ namespace: 'home', ...(require('/Users/zhengqifeng/react/zqf_wangyi_music/create/src/models/home.js').default) });
app.model({ namespace: 'nav', ...(require('/Users/zhengqifeng/react/zqf_wangyi_music/create/src/models/nav.js').default) });
