/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useRef, useEffect} from 'react';
import {useLocation} from '@docusaurus/router';

export function useChangeRoute(onRouteChange: () => void): void {
  const {pathname} = useLocation();
  const initialPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== initialPathname.current) {
      initialPathname.current = pathname;
      onRouteChange();
    }
  }, [pathname, initialPathname, onRouteChange]);
}
