export default function Footer() {
  return (
    <footer className="bg-brand text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-black text-2xl mb-4">AXMOS</h3>
            <p className="text-blue-100 text-sm">
              AI 도입이 아니라, 업무를 줄이는 실행을 합니다.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="/ax-build" className="hover:text-white transition">AX Build</a></li>
              <li><a href="/ax-grow" className="hover:text-white transition">AX Grow</a></li>
              <li><a href="/contact" className="hover:text-white transition">파트너십 신청</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">문의</h4>
            <p className="text-sm text-blue-100">
              이메일: axmos@codepresso.io
            </p>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-8 text-center text-sm text-blue-100">
          <p>&copy; 2026 AXMOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
