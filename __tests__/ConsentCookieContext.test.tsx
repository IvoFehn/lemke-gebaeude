import { renderHook, act } from '@testing-library/react';
import { ConsentCookieProvider, useConsentCookie } from '@/context/ConsentCookieContext';

describe('ConsentCookieContext', () => {
  it('provides default state and allows dispatching actions', () => {
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <ConsentCookieProvider>{children}</ConsentCookieProvider>
    );

    const { result } = renderHook(() => useConsentCookie(), { wrapper });

    expect(result.current.state.showBanner).toBe(false);

    act(() => {
      result.current.dispatch({ type: 'SHOW_BANNER' });
    });
    expect(result.current.state.showBanner).toBe(true);

    act(() => {
      result.current.dispatch({ type: 'HIDE_BANNER' });
    });
    expect(result.current.state.showBanner).toBe(false);

    act(() => {
      result.current.dispatch({
        type: 'SET_COOKIE',
        payload: { name: 'test', value: 'value' },
      });
    });
    expect(result.current.state['test']).toBe('value');
  });
});
