import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>9/17 知らないだけで実は当たり前？！AIで開発👀</h1>
        <div className="summary">
          <div className="summary-item">
            <h2 className="blue">できた</h2>
            <p>React！</p>
            <p>CodeCopilotを初めて使用！</p>
          </div>
          <div className="summary-item">
            <h2 className="red">学び</h2>
            <p>CodeCopilotというAIが存在します。実は新しいものではなく、GitHubにてもともと提供されていた有料サービスです。</p>
          </div>
          <div className="summary-item">
            <h2 className="cyan">次にやること</h2>
            <p>JavaでもCodeCopilot使えるとの噂あり👀試したい…</p>
          </div>
          <div className="summary-item">
            <h2 className="pink">babubabu</h2>
            <p>9月もあっという間に過ぎていきますね！ついこの前9月になったと思ったばかりなのに…💦</p>
          </div>
        </div>
        <div className="report">
          <h2>9/17 日報</h2>
          
          <h2 className='blue'>できた:</h2>
          <ul>
            <li>React！</li>
            <li>CodeCopilotを初めて使用！</li>
          </ul>
          <h2 className='red'>学び:</h2>
          <p>CodeCopilotというAIが存在します。実は新しいものではなく、GitHubにてもともと提供されていた有料サービスです。Zedエディタに搭載されているClaudeも優秀な上に無料なのですが、このCodeCopilotはプログラミング言語等でコードを書くことに特化した機能が満載です。この界隈では非常に有名なサービスで利用者も多く、なおかつClaude等に比べてやすいことが魅力的です。そして何よりVisualStudioCodeで動作するのが嬉しいです✨いままでのZedエディタもいいのですが、Javaなど非対応のプログラミング言語が多く、しかもまさかのWindows非対応なのです。将来大化けするかも知れない注目株ではあるのですが👀</p>
          <p>CodeCopilotは無料使用期間が1か月あり、そして料金がAIにしてはお手頃です。Claudeの有料版からの乗り換えを検討しているので来月上旬に決定しようと思います。※Geminiは手放せないので契約続行決定😸</p>
          <h2 className='cyan'>次にやること:</h2>
          <p>JavaでもCodeCopilot使えるとの噂あり👀試したい…</p>
          <h2 className='pink'>babubabu:</h2>
          <p>9月もあっという間に過ぎていきますね！ついこの前9月になったと思ったばかりなのに…💦今日は久しぶりにハローワークに出頭する日でした。しかし頭の中は別件でいっぱい（笑）用事が済んでからはまっしぐらに立川に向かい、またもReactモードです。そして夜はJava時間にします✨開発環境を自分のPCに整えようと今からワクワクです😊</p>
        </div>
      </header>
    </div>
  );
}

export default App;