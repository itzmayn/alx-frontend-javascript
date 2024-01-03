/* eslint-disable */
/**
 * Implements a load balancer by choosing the fastest download among China and US servers.
 * @param {Promise} chinaDownload - The download Promise from the China server.
 * @param {Promise} USDownload - The download Promise from the US server.
 * @returns {Promise} - A Promise resolving to the fastest download between China and US servers.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
