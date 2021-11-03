import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/core';
require('dotenv').config();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: GITHUB_TOKEN });

@Injectable()
export class AppService {
  async getCommits(query) {
    try {
      const commits = (
        await octokit.request(`GET /repos/{owner}/{repo}/commits`, {
          owner: query.owner || 'nodejs',
          repo: query.repo || 'node',
          per_page: query.per_page || 25,
          sha: query.sha,
        })
      ).data;
      if (!query.filter) {
        return commits;
      } else if (query.filter === 'messages') {
        return commits.map((elem) => elem.commit.message);
      } else if (query.filter === 'hashes') {
        return commits.map((elem) => elem.sha);
      } else {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Your filter is not supported',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException({ status: error.status, error }, error.status);
    }
  }
}
